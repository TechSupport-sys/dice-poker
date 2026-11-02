/* Dice Poker scorecard — local, no server, no storage, multilingual. */
(function () {
  'use strict';

  var I18N = {
    en: {
      langName: 'English',
      brand: 'Dice Poker',
      setupTitle: 'New game',
      playersLabel: 'Players',
      playerNamePlaceholder: 'Player',
      createBtn: 'Create game',
      hint: 'Play → screenshot. Scores are not saved.',
      gameTitle: '{{n}} players · {{cat}} categories',
      undoBtn: '↩ Undo',
      newGameBtn: 'New',
      statusDone: 'Tap screenshot when finished',
      confirmNew: 'Reset the table and start a new game?',
      categoryHeader: 'Category',
      upperSection: 'Upper',
      upperHint: 'count of dice',
      lowerSection: 'Lower',
      lowerHint: 'combination points',
      sum: 'Sum',
      bonus: 'Bonus 63+',
      upperTotal: 'Upper',
      lowerTotal: 'Lower',
      grand: 'Total',
      rank: 'Place',
      filled: '{{f}}/{{cat}}',
      rules: [
        '<b>Upper section</b> — enter how many dice of each face (0–5). Score = count × face. 63+ gives a +35 bonus.',
        '<b>Three of a kind</b> — sum of all five dice.',
        '<b>Small 4 of a kind</b> — four identical dice; sum of all five dice.',
        '<b>Full house</b> — 25 points.',
        '<b>Large 5 of a kind</b> — 50 points. Each additional five-of-a-kind adds +100.',
        '<b>Chance</b> — sum of any five dice.'
      ],
      rows: {
        ones: ['Ones', '× 1 point'],
        twos: ['Twos', '× 2 points'],
        threes: ['Threes', '× 3 points'],
        fours: ['Fours', '× 4 points'],
        fives: ['Fives', '× 5 points'],
        sixes: ['Sixes', '× 6 points'],
        threeKind: ['Three of a kind', '3 equal · sum of dice'],
        fourKind: ['Small 4 of a kind', '4 equal · sum of dice'],
        fullHouse: ['Full house', '3 + 2 · 25'],
        poker: ['Large 5 of a kind', '5 equal · 50'],
        chance: ['Chance', 'any five dice'],
        pokerBonus: ['Poker bonus', '+100 per extra']
      }
    },
    uk: {
      langName: 'Українська',
      brand: 'Dice Poker',
      setupTitle: 'Нова гра',
      playersLabel: 'Гравців',
      playerNamePlaceholder: 'Гравець',
      createBtn: 'Створити гру',
      hint: 'Зіграли — скріншот. Рахунок не зберігається.',
      gameTitle: '{{n}} гравців · {{cat}} категорій',
      undoBtn: '↩ Скасувати',
      newGameBtn: 'Нова',
      statusDone: 'Тапни скріншот, коли фініш',
      confirmNew: 'Скинути таблицю і почати нову гру?',
      categoryHeader: 'Категорія',
      upperSection: 'Верхня',
      upperHint: 'кількість кубиків',
      lowerSection: 'Нижня',
      lowerHint: 'очки комбінації',
      sum: 'Сума',
      bonus: 'Бонус 63+',
      upperTotal: 'Верх',
      lowerTotal: 'Низ',
      grand: 'Всього',
      rank: 'Місце',
      filled: '{{f}}/{{cat}}',
      rules: [
        '<b>Верхня секція</b> — вноситься кількість кубиків (0–5). Очки = кількість × грань. Сума 63+ дає бонус 35.',
        '<b>Трійка 3x</b> — сума всіх п’яти кубиків.',
        '<b>Малий 4x</b> — чотири однакові; сума всіх п’яти кубиків.',
        '<b>Фулл-хаус</b> — 25 очків.',
        '<b>Великий 5x</b> — 50 очків. Кожен наступний покер — +100.',
        '<b>Шанс</b> — сума будь-яких п’яти кубиків.'
      ],
      rows: {
        ones: ['Одиниці', '× 1 очко'],
        twos: ['Двійки', '× 2 очки'],
        threes: ['Трійки', '× 3 очки'],
        fours: ['Четвірки', '× 4 очки'],
        fives: ['П’ятірки', '× 5 очків'],
        sixes: ['Шістки', '× 6 очків'],
        threeKind: ['Трійка 3x', '3 однакові · сума кубиків'],
        fourKind: ['Малий 4x', '4 однакові · сума кубиків'],
        fullHouse: ['Фулл-хаус', '3 + 2 · 25'],
        poker: ['Великий 5x', '5 однакових · 50'],
        chance: ['Шанс', 'будь-які 5 кубиків'],
        pokerBonus: ['Бонус покер', '+100 за кожен зайвий']
      }
    },
    ru: {
      langName: 'Русский',
      brand: 'Dice Poker',
      setupTitle: 'Новая игра',
      playersLabel: 'Игроков',
      playerNamePlaceholder: 'Игрок',
      createBtn: 'Создать игру',
      hint: 'Сыграли — сделали скриншот. Данные не сохраняются.',
      gameTitle: '{{n}} игроков · {{cat}} категорий',
      undoBtn: '↩ Отмена',
      newGameBtn: 'Новая',
      statusDone: 'Тапни скриншот, когда финиш',
      confirmNew: 'Сбросить таблицу и начать новую игру?',
      categoryHeader: 'Категория',
      upperSection: 'Верхняя',
      upperHint: 'количество кубиков',
      lowerSection: 'Нижняя',
      lowerHint: 'очки комбинации',
      sum: 'Сумма',
      bonus: 'Бонус 63+',
      upperTotal: 'Верх',
      lowerTotal: 'Низ',
      grand: 'Всего',
      rank: 'Место',
      filled: '{{f}}/{{cat}}',
      rules: [
        '<b>Верхняя секция</b> — вносится количество кубиков (0–5), очки = количество × грань. Сумма 63+ даёт бонус 35.',
        '<b>Тройка 3x</b> — три одинаковых; пишется сумма всех пяти кубиков.',
        '<b>Малый 4x</b> — четыре одинаковых; пишется сумма всех пяти кубиков.',
        '<b>Фулл-хаус</b> — три + два; 25 очков.',
        '<b>Большой 5x</b> — все пять кубиков одинаковые; 50 очков. Каждый следующий покер — бонус +100.',
        '<b>Шанс</b> — сумма любых пяти кубиков.'
      ],
      rows: {
        ones: ['Единицы', '× 1 очко'],
        twos: ['Двойки', '× 2 очки'],
        threes: ['Тройки', '× 3 очки'],
        fours: ['Четверки', '× 4 очки'],
        fives: ['Пятерки', '× 5 очков'],
        sixes: ['Шестерки', '× 6 очков'],
        threeKind: ['Тройка 3x', '3 одинаковых · сумма кубиков'],
        fourKind: ['Малый 4x', '4 одинаковых · сумма кубиков'],
        fullHouse: ['Фулл-хаус', '3 + 2 · 25'],
        poker: ['Большой 5x', '5 одинаковых · 50'],
        chance: ['Шанс', 'любые 5 кубиков'],
        pokerBonus: ['Бонус покер', '+100 за каждый лишний']
      }
    }
  };
  var LANGS = ['en', 'uk', 'ru'];
  var DEFAULT_LANG = 'en';

  var ROW_DEF = [
    { key: 'ones', factor: 1 },
    { key: 'twos', factor: 2 },
    { key: 'threes', factor: 3 },
    { key: 'fours', factor: 4 },
    { key: 'fives', factor: 5 },
    { key: 'sixes', factor: 6 },
    { key: 'threeKind', type: 'number', max: 30 },
    { key: 'fourKind', type: 'number', max: 30 },
    { key: 'fullHouse', type: 'fixed', fixedValue: 25 },
    { key: 'poker', type: 'fixed', fixedValue: 50 },
    { key: 'chance', type: 'number', max: 30 },
    { key: 'pokerBonus', type: 'number', max: 1000 }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    setup: $('setup'), game: $('game'), status: $('status'),
    playerCount: $('playerCount'), names: $('nameFields'), title: $('gameTitle'),
    table: $('scoreTable'), leaderboard: $('leaderboard'), tabs: $('playerTabs'),
    foot: $('netInfo'), undoBtn: $('undoBtn'), langSelect: $('langSelect'), rulesList: $('rulesList')
  };
  if (!els.table) return;

  var state = null;
  var lastAction = null;
  var lastMobile = null;
  var lang = DEFAULT_LANG;

  function t(key, data) {
    var text = I18N[lang][key] || I18N[DEFAULT_LANG][key] || '';
    if (data) {
      Object.keys(data).forEach(function (k) { text = text.replace('{{' + k + '}}', data[k]); });
    }
    return text;
  }

  function rowLabel(key) { return I18N[lang].rows[key][0]; }
  function rowHint(key) { return I18N[lang].rows[key][1]; }

  function setLang(next) {
    if (!I18N[next]) next = DEFAULT_LANG;
    lang = next;
    document.documentElement.lang = next;
    renderLabels();
    if (state) render();
  }

  function renderLabels() {
    [].forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      if (key === 'gameTitle') return;
      var val = t(key);
      if (el.tagName === 'INPUT') el.placeholder = val;
      else el.textContent = val;
    });
    if (els.rulesList) {
      els.rulesList.innerHTML = '';
      t('rules').forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = item;
        els.rulesList.appendChild(li);
      });
    }
    var sel = els.langSelect;
    if (sel && sel.children.length === 0) {
      LANGS.forEach(function (l) {
        var o = document.createElement('option');
        o.value = l; o.textContent = I18N[l].langName;
        if (l === lang) o.selected = true;
        sel.appendChild(o);
      });
    } else if (sel) sel.value = lang;
  }

  for (var i = 2; i <= 12; i++) {
    var o = document.createElement('option');
    o.value = String(i); o.textContent = String(i);
    if (i === 5) o.selected = true;
    els.playerCount.appendChild(o);
  }

  function nameFields() {
    var n = Number(els.playerCount.value);
    els.names.innerHTML = '';
    for (var i = 0; i < n; i++) {
      var inp = document.createElement('input');
      inp.type = 'text'; inp.maxLength = 24;
      inp.placeholder = t('playerNamePlaceholder') + ' ' + (i + 1);
      els.names.appendChild(inp);
    }
  }

  function setStatus(text) { els.status.textContent = text || ''; }

  function emptyScores(players) {
    var scores = {};
    ROW_DEF.forEach(function (r) { scores[r.key] = new Array(players).fill(''); });
    return scores;
  }

  function val(key, idx) {
    var arr = state && state.scores ? state.scores[key] : null;
    var v = arr ? arr[idx] : '';
    return v == null ? '' : String(v);
  }

  function num(key, idx) {
    var n = Number(val(key, idx));
    return Number.isFinite(n) ? n : 0;
  }

  function calc(st) {
    var p = st.players.length;
    var res = { upper: [], bonus: [], upperTotal: [], lower: [], grand: [], rank: [], filled: [] };
    for (var i = 0; i < p; i++) {
      var up = 0;
      ROW_DEF.forEach(function (r) { if (r.factor) up += num(r.key, i) * r.factor; });
      var bo = up >= 63 ? 35 : 0;
      var lo = 0;
      ROW_DEF.forEach(function (r) { if (!r.factor) lo += num(r.key, i); });
      var filled = 0;
      ROW_DEF.forEach(function (r) { if (val(r.key, i) !== '') filled++; });
      res.upper.push(up); res.bonus.push(bo); res.upperTotal.push(up + bo);
      res.lower.push(lo); res.grand.push(up + bo + lo); res.filled.push(filled);
    }
    res.rank = res.grand.map(function (g) { return 1 + res.grand.filter(function (x) { return x > g; }).length; });
    return res;
  }

  function clamp(v, min, max) { return Math.max(min, Math.min(max, Math.trunc(Number(v) || 0))); }
  function maxFor(row) { return row.type === 'fixed' ? row.fixedValue : (row.max || 5); }
  function isMobile() { return window.innerWidth <= 1024; }

  function setCell(rowKey, idx, v) {
    if (state) {
      lastAction = { rowKey: rowKey, idx: idx, from: state.scores[rowKey][idx], to: v };
      state.scores[rowKey][idx] = String(v);
      setStatus(t('statusDone'));
      if (els.undoBtn) els.undoBtn.disabled = false;
    }
    render();
  }

  function labelCell(row) {
    var td = document.createElement('td');
    var title = document.createElement('div');
    title.className = 'row-title';
    title.textContent = rowLabel(row.key);
    td.appendChild(title);
    var hint = document.createElement('div');
    hint.className = 'row-hint';
    hint.textContent = rowHint(row.key);
    td.appendChild(hint);
    return td;
  }

  function sectionRow(title, hint, colspan) {
    var tr = document.createElement('tr');
    tr.className = 'section';
    var td = document.createElement('td');
    td.colSpan = colspan || 1;
    td.innerHTML = '<span class="sec-title">' + title + '</span><span class="sec-hint">' + hint + '</span>';
    tr.appendChild(td);
    return tr;
  }

  function calcRow(label, value, cls) {
    var tr = document.createElement('tr');
    tr.className = 'calc-row';
    var td = document.createElement('td');
    td.textContent = label;
    tr.appendChild(td);
    var td2 = document.createElement('td');
    td2.className = 'calc' + (cls ? ' ' + cls : '');
    td2.textContent = String(value);
    tr.appendChild(td2);
    return tr;
  }

  function cellInput(row, idx) {
    var td = document.createElement('td');
    var cur = val(row.key, idx);

    if (row.type === 'fixed') {
      var wrap = document.createElement('div');
      wrap.className = 'seg';
      [['0', '0'], [String(row.fixedValue), String(row.fixedValue)]].forEach(function (pair) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'seg-btn' + (cur === pair[1] ? ' active' : '');
        b.textContent = pair[0];
        b.addEventListener('click', function () {
          var next = (cur === pair[1]) ? '' : pair[1];
          setCell(row.key, idx, next);
        });
        wrap.appendChild(b);
      });
      td.appendChild(wrap);
    } else if (row.factor) {
      var wrap = document.createElement('div');
      wrap.className = 'pips';
      for (var v = 0; v <= 5; v++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'pip' + (String(cur) === String(v) ? ' active' : '');
        b.textContent = String(v);
        b.addEventListener('click', (function (vv) { return function () {
          var next = String(cur) === String(vv) ? '' : String(vv);
          setCell(row.key, idx, next);
        }; })(v));
        wrap.appendChild(b);
      }
      td.appendChild(wrap);
    } else {
      var wrap = document.createElement('div');
      wrap.className = 'num-wrap';
      var quick = [0, 5, 10, 15, 20, 25, 30];
      if (row.max >= 1000) quick = [0, 100, 200, 300];
      quick.forEach(function (q) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'quick' + (String(cur) === String(q) ? ' active' : '');
        b.textContent = String(q);
        b.addEventListener('click', (function (qq) { return function () {
          var next = String(cur) === String(qq) ? '' : String(qq);
          setCell(row.key, idx, next);
        }; })(q));
        wrap.appendChild(b);
      });
      var inp = document.createElement('input');
      inp.className = 'num-input';
      inp.type = 'number'; inp.inputMode = 'numeric';
      inp.min = '0'; inp.max = String(maxFor(row)); inp.value = cur;
      inp.addEventListener('change', function () {
        if (inp.value === '') setCell(row.key, idx, '');
        else setCell(row.key, idx, String(clamp(inp.value, 0, maxFor(row))));
      });
      wrap.appendChild(inp);
      td.appendChild(wrap);
    }
    return td;
  }

  function renderDesktop(c) {
    els.table.innerHTML = '';
    els.table.classList.remove('mobile-table');
    var thead = document.createElement('thead');
    var hr = document.createElement('tr');
    var thCat = document.createElement('th');
    thCat.innerHTML = '<span class="th-main">' + t('categoryHeader') + '</span>';
    hr.appendChild(thCat);
    state.players.forEach(function (n, i) {
      var th = document.createElement('th');
      var rankCls = c.rank[i] === 1 ? 'gold' : c.rank[i] === 2 ? 'silver' : c.rank[i] === 3 ? 'bronze' : '';
      th.innerHTML = '<div class="player-head">' +
        '<span class="player-name">' + n + '</span>' +
        '<span class="player-meta ' + rankCls + '">' +
          '<span class="ph-rank">' + c.rank[i] + '</span>' +
          '<span class="ph-total">' + c.grand[i] + '</span>' +
        '</span>' +
      '</div>';
      hr.appendChild(th);
    });
    thead.appendChild(hr);
    els.table.appendChild(thead);

    var tb = document.createElement('tbody');
    tb.appendChild(sectionRow(t('upperSection'), t('upperHint'), 1 + state.players.length));
    ROW_DEF.forEach(function (row) {
      if (!row.factor) return;
      var tr = document.createElement('tr'); tr.className = 'input-row';
      tr.appendChild(labelCell(row));
      for (var i = 0; i < state.players.length; i++) tr.appendChild(cellInput(row, i));
      tb.appendChild(tr);
    });
    tb.appendChild(calcAll(t('sum'), c.upper));
    tb.appendChild(calcAll(t('bonus'), c.bonus));
    tb.appendChild(calcAll(t('upperTotal'), c.upperTotal));
    tb.appendChild(sectionRow(t('lowerSection'), t('lowerHint'), 1 + state.players.length));
    ROW_DEF.forEach(function (row) {
      if (row.factor) return;
      var tr = document.createElement('tr'); tr.className = 'input-row';
      tr.appendChild(labelCell(row));
      for (var i = 0; i < state.players.length; i++) tr.appendChild(cellInput(row, i));
      tb.appendChild(tr);
    });
    tb.appendChild(calcAll(t('lowerTotal'), c.lower));
    tb.appendChild(sectionRow(t('grand'), '', 1 + state.players.length));
    tb.appendChild(calcAll(t('grand'), c.grand, 'total'));
    tb.appendChild(calcAll(t('rank'), c.rank, 'rank'));
    els.table.appendChild(tb);

    function calcAll(label, values, cls) {
      var tr = document.createElement('tr');
      tr.className = 'calc-row';
      var td = document.createElement('td');
      td.textContent = label;
      tr.appendChild(td);
      values.forEach(function (v) {
        var t = document.createElement('td');
        t.className = 'calc' + (cls ? ' ' + cls : '');
        t.textContent = String(v);
        tr.appendChild(t);
      });
      return tr;
    }
  }

  function renderMobile(c) {
    els.table.innerHTML = '';
    els.table.classList.add('mobile-table');
    var idx = state.mobileIdx || 0;
    if (idx >= state.players.length) idx = 0;
    state.mobileIdx = idx;

    var thead = document.createElement('thead');
    var hr = document.createElement('tr');
    var thCat = document.createElement('th');
    thCat.innerHTML = '<span class="th-main">' + t('categoryHeader') + '</span>';
    hr.appendChild(thCat);
    var thPl = document.createElement('th');
    thPl.innerHTML = '<div class="player-head"><span class="player-name">' + state.players[idx] + '</span><span class="player-meta"><span class="ph-rank">' + c.rank[idx] + '</span><span class="ph-total">' + c.grand[idx] + '</span></span></div>';
    hr.appendChild(thPl);
    thead.appendChild(hr);
    els.table.appendChild(thead);

    var tb = document.createElement('tbody');
    tb.appendChild(sectionRow(t('upperSection'), t('upperHint'), 2));
    ROW_DEF.forEach(function (row) {
      if (!row.factor) return;
      var tr = document.createElement('tr'); tr.className = 'input-row';
      tr.appendChild(labelCell(row));
      tr.appendChild(cellInput(row, idx));
      tb.appendChild(tr);
    });
    tb.appendChild(calcRow(t('sum'), c.upper[idx]));
    tb.appendChild(calcRow(t('bonus'), c.bonus[idx]));
    tb.appendChild(calcRow(t('upperTotal'), c.upperTotal[idx]));
    tb.appendChild(sectionRow(t('lowerSection'), t('lowerHint'), 2));
    ROW_DEF.forEach(function (row) {
      if (row.factor) return;
      var tr = document.createElement('tr'); tr.className = 'input-row';
      tr.appendChild(labelCell(row));
      tr.appendChild(cellInput(row, idx));
      tb.appendChild(tr);
    });
    tb.appendChild(calcRow(t('lowerTotal'), c.lower[idx]));
    tb.appendChild(sectionRow(t('grand'), '', 2));
    tb.appendChild(calcRow(t('grand'), c.grand[idx], 'total'));
    tb.appendChild(calcRow(t('rank'), c.rank[idx], 'rank'));
    els.table.appendChild(tb);
  }

  function renderTabs(c) {
    if (!els.tabs) return;
    var mobile = isMobile();
    els.tabs.classList.toggle('hidden', !mobile);
    if (!mobile) { els.tabs.innerHTML = ''; return; }
    els.tabs.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'tab-list';
    state.players.forEach(function (n, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tab' + (state.mobileIdx === i ? ' active' : '');
      var rank = c.rank[i] === 1 ? '🥇' : c.rank[i] === 2 ? '🥈' : c.rank[i] === 3 ? '🥉' : '#' + c.rank[i];
      var filled = t('filled', { f: c.filled[i], cat: ROW_DEF.length });
      btn.innerHTML = '<span class="tab-rank">' + rank + '</span><span class="tab-name">' + n + '</span><span class="tab-total">' + c.grand[i] + '</span><span class="tab-filled">' + filled + '</span>';
      btn.addEventListener('click', function () {
        state.mobileIdx = i;
        render();
      });
      wrap.appendChild(btn);
    });
    els.tabs.appendChild(wrap);
  }

  function render() {
    if (!state) return;
    var c = calc(state);
    var mobile = isMobile();
    if (mobile) renderMobile(c); else renderDesktop(c);
    lastMobile = mobile;
    els.title.textContent = t('gameTitle', { n: state.players.length, cat: ROW_DEF.length });
    renderTabs(c);
    renderLeaderboard(c);
    if (els.leaderboard) els.leaderboard.style.display = mobile ? 'none' : '';
  }

  function renderLeaderboard(c) {
    if (!els.leaderboard) return;
    var pairs = state.players.map(function (n, i) { return { name: n, total: c.grand[i], rank: c.rank[i], filled: c.filled[i], idx: i }; });
    pairs.sort(function (a, b) { return b.total - a.total || a.idx - b.idx; });
    els.leaderboard.innerHTML = '';
    var wrap = document.createElement('div');
    wrap.className = 'lb-list';
    pairs.forEach(function (p) {
      var chip = document.createElement('div');
      chip.className = 'lb-chip';
      var rank = p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : '#' + p.rank;
      var filled = t('filled', { f: p.filled, cat: ROW_DEF.length });
      chip.innerHTML = '<span class="lb-rank">' + rank + '</span><span class="lb-name">' + p.name + '</span><span class="lb-total">' + p.total + '</span><span class="lb-filled">' + filled + '</span>';
      wrap.appendChild(chip);
    });
    els.leaderboard.appendChild(wrap);
  }

  function undo() {
    if (!lastAction || !state) return;
    state.scores[lastAction.rowKey][lastAction.idx] = lastAction.from;
    lastAction = null;
    if (els.undoBtn) els.undoBtn.disabled = true;
    render();
  }

  function openGame(st) {
    state = st;
    state.mobileIdx = 0;
    els.setup.classList.add('hidden');
    els.game.classList.remove('hidden');
    lastAction = null;
    if (els.undoBtn) els.undoBtn.disabled = true;
    render();
  }

  function createGame() {
    var n = Number(els.playerCount.value);
    var names = Array.prototype.slice.call(els.names.querySelectorAll('input'))
      .map(function (el, i) { return (el.value || '').trim() || (t('playerNamePlaceholder') + ' ' + (i + 1)); })
      .slice(0, n);
    openGame({ players: names, scores: emptyScores(names.length) });
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var now = isMobile();
      if (now !== lastMobile && state) render();
    }, 150);
  });

  $('playerCount').addEventListener('change', nameFields);
  $('createBtn').addEventListener('click', createGame);
  $('newGameBtn').addEventListener('click', function () {
    if (!confirm(t('confirmNew'))) return;
    state = null;
    els.setup.classList.remove('hidden');
    els.game.classList.add('hidden');
    nameFields();
    setStatus('');
  });
  if (els.undoBtn) els.undoBtn.addEventListener('click', undo);
  if (els.langSelect) els.langSelect.addEventListener('change', function () { setLang(els.langSelect.value); });

  renderLabels();
  nameFields();
  setStatus('');
})();
