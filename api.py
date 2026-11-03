#!/usr/bin/env python3
"""Small leaderboard API for Dice Poker scorecard."""
import os
import sqlite3
from datetime import datetime, timedelta
from flask import Flask, request, jsonify, g

DB_PATH = '/var/www/dice-poker/data/leaderboard.db'
MAX_NAME = 20
MAX_SCORE = 400
LIMIT = 10

app = Flask(__name__)


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        db = g._database = sqlite3.connect(DB_PATH)
        db.row_factory = sqlite3.Row
        init_db(db)
    return db


def init_db(db):
    db.execute('''
        CREATE TABLE IF NOT EXISTS scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            score INTEGER NOT NULL,
            played_at TEXT NOT NULL,
            ip TEXT NOT NULL
        )
    ''')
    db.execute('''
        CREATE TABLE IF NOT EXISTS submissions (
            ip TEXT PRIMARY KEY,
            submitted_at TEXT NOT NULL
        )
    ''')
    db.execute('''
        CREATE INDEX IF NOT EXISTS idx_played_at ON scores(played_at)
    ''')
    db.commit()


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


def now_iso():
    return datetime.utcnow().isoformat(timespec='seconds') + 'Z'


def period_bounds(period):
    now = datetime.utcnow()
    if period == 'day':
        start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    elif period == 'month':
        start = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    else:
        start = datetime(1970, 1, 1)
    return start.isoformat(timespec='seconds') + 'Z'


def ip_key():
    forwarded = request.headers.get('X-Forwarded-For', '')
    if forwarded:
        return forwarded.split(',')[0].strip()[:45]
    return request.remote_addr or 'unknown'


def rate_limit_ok(db, ip):
    row = db.execute(
        'SELECT submitted_at FROM submissions WHERE ip = ?',
        (ip,)
    ).fetchone()
    if row and row['submitted_at']:
        last = datetime.fromisoformat(row['submitted_at'].replace('Z', '+00:00')).replace(tzinfo=None)
        if datetime.utcnow() - last < timedelta(seconds=10):
            return False
    return True


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


@app.route('/api/leaderboard', methods=['OPTIONS'])
def options_leaderboard():
    return '', 204


@app.route('/api/leaderboard', methods=['GET'])
def leaderboard():
    period = request.args.get('period', 'all')
    if period not in ('all', 'month', 'day'):
        period = 'all'
    bound = period_bounds(period)
    db = get_db()
    rows = db.execute('''
        SELECT name, score, played_at
        FROM scores
        WHERE played_at >= ?
        ORDER BY score DESC, played_at ASC
        LIMIT ?
    ''', (bound, LIMIT)).fetchall()
    return jsonify({
        'period': period,
        'entries': [{'name': r['name'], 'score': r['score'], 'playedAt': r['played_at']} for r in rows]
    })


@app.route('/api/leaderboard', methods=['POST'])
def submit():
    data = request.get_json(silent=True) or {}
    name = str(data.get('name', '')).strip()
    score = data.get('score')
    if score is None:
        return jsonify({'error': 'Invalid score'}), 400
    if not name or len(name) > MAX_NAME:
        return jsonify({'error': 'Invalid name'}), 400
    try:
        score = int(score)
    except (TypeError, ValueError):
        return jsonify({'error': 'Invalid score'}), 400
    if score < 0 or score > MAX_SCORE:
        return jsonify({'error': 'Score out of range'}), 400

    ip = ip_key()
    db = get_db()
    if not rate_limit_ok(db, ip):
        return jsonify({'error': 'Too many submissions'}), 429

    played_at = now_iso()
    db.execute('''
        INSERT INTO scores (name, score, played_at, ip)
        VALUES (?, ?, ?, ?)
    ''', (name, score, played_at, ip))
    db.execute('''
        INSERT INTO submissions (ip, submitted_at)
        VALUES (?, ?)
        ON CONFLICT(ip) DO UPDATE SET submitted_at=excluded.submitted_at
    ''', (ip, played_at))
    db.commit()
    return jsonify({'ok': True}), 201


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
