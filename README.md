# Dice Poker

A lightweight, static browser scorecard for Yahtzee-style dice games.

Live: https://dice.fvn-net.org

## How to play

1. Choose the number of players (2–12) and enter names.
2. Tap **Roll dice** to roll five virtual 3D dice. On mobile, you can also enable **Shake to roll**.
3. Enter the score into one of the categories, or tap a suggested combination.
4. Fill all 13 categories to finish. The winner is shown automatically and submitted to the shared leaderboard.

A single game state lives only in the current page — refresh starts a new game. The shared leaderboard is the only server-side persistence.

## Shared leaderboard

A top-10 leaderboard is shared across all visitors. It can be filtered by period:

- **All time**
- **Month**
- **Day**

The winner of each finished game is submitted automatically. Submissions include name, score, and the played date/time.

### API endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/leaderboard?period=all` | Top 10 entries for the selected period |
| GET | `/api/leaderboard?period=month` | Same, limited to current month |
| GET | `/api/leaderboard?period=day` | Same, limited to current day |
| POST | `/api/leaderboard` | Submit `{ "name": "...", "score": N }` |
| OPTIONS | `/api/leaderboard` | CORS preflight |

Rules: name 1–20 characters, score 0–400, one submission per IP per 10 seconds.

### Backend setup (for self-hosting)

1. Install Flask on the host:
   ```bash
   apt-get install -y python3-flask
   ```
2. Copy `api.py` and `dice-poker-api.service` to the server.
3. Enable and start the service:
   ```bash
   systemctl daemon-reload
   systemctl enable --now dice-poker-api.service
   ```
4. Configure Apache to proxy `/api` to `http://127.0.0.1:5000/api`:
   ```apache
   ProxyPass /api http://127.0.0.1:5000/api
   ProxyPassReverse /api http://127.0.0.1:5000/api
   RequestHeader set X-Forwarded-For %{REMOTE_ADDR}s
   ```
5. Make the data directory writable by the service user:
   ```bash
   chown -R www-data:www-data /var/www/dice-poker
   ```

## Scoring (official Yahtzee / Hasbro)

| Category | Rule | Points |
|---|---|---|
| Aces, Twos, Threes, Fours, Fives, Sixes | Count of dice with that face | count × face |
| Bonus | Upper section total ≥ 63 | +35 |
| 3 of a kind | Three or more equal dice | sum of all five dice |
| 4 of a kind | Four or more equal dice | sum of all five dice |
| Full house | Three of one face and two of another | 25 |
| Small straight | 4 dice in a row (1-2-3-4, 2-3-4-5 or 3-4-5-6) | 30 |
| Large straight | 5 dice in a row (1-2-3-4-5 or 2-3-4-5-6) | 40 |
| Yahtzee | 5 equal dice | 50 |
| Yahtzee bonus | Every additional Yahtzee | +100 |
| Chance | Any roll | sum of all five dice |

There are 13 played categories; Yahtzee bonus is a bonus row, not a played category.

## Languages

- English (default)
- Українська
- Русский

Switch via the dropdown in the top-right corner.

## Tech

- Static HTML/CSS/JS frontend — no build step, no external frontend libraries.
- Flask + SQLite backend for the shared leaderboard only.
- Dice rolls use `crypto.getRandomValues` for uniform randomness.

## License

MIT
