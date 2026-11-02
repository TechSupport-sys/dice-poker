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
      rulesSummary: 'How to score combinations',
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
        '<b>3 of a kind</b> — three identical dice; score the sum of all five dice.',
        '<b>4 of a kind</b> — four identical dice; score the sum of all five dice.',
        '<b>Full house</b> — three of one number and two of another; 25 points.',
        '<b>Small straight</b> — 4 dice in a row (1-2-3-4, 2-3-4-5 or 3-4-5-6); 30 points.',
        '<b>Large straight</b> — 5 dice in a row (1-2-3-4-5 or 2-3-4-5-6); 40 points.',
        '<b>Yahtzee (5 of a kind)</b> — five identical dice; 50 points. Each additional Yahtzee adds +100.',
        '<b>Chance</b> — sum of any five dice.'
      ],
      rollBtn: '🎲 Roll dice',
      rollCount: 'Roll {{n}}/{{max}}',
      heldHint: 'Tap dice to hold',

      shakeBtn: '📳 Shake to roll',
      shakeDenied: 'Permission denied',
      shakeError: 'Shake unavailable',
      shakeUnsupported: 'Shake unsupported',
      suggestTitle: 'Suggestions for current player',
      suggestPlayer: 'For player',
      suggestNone: 'No scoring matches this roll.',
      overwritePrompt: '{{row}} already has a score. Overwrite?',
      diceModeLabel: 'Virtual dice',
      manualSuggestBtn: 'Get suggestions',
      rows: {
        ones: ['Aces', '× 1'],
        twos: ['Twos', '× 2'],
        threes: ['Threes', '× 3'],
        fours: ['Fours', '× 4'],
        fives: ['Fives', '× 5'],
        sixes: ['Sixes', '× 6'],
        threeKind: ['3 of a kind', '3 equal · sum'],
        fourKind: ['4 of a kind', '4 equal · sum'],
        fullHouse: ['Full house', '3 + 2 · 25'],
        smallStraight: ['Small straight', '4 in a row · 30'],
        largeStraight: ['Large straight', '5 in a row · 40'],
        poker: ['Yahtzee', '5 equal · 50'],
        chance: ['Chance', 'any five dice'],
        pokerBonus: ['Yahtzee bonus', '+100 per extra']
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
      rulesSummary: 'Як оцінювати комбінації',
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
        '<b>3 в однакових</b> — три однакові кубики; сума всіх п’яти кубиків.',
        '<b>4 в однакових</b> — чотири однакові кубики; сума всіх п’яти кубиків.',
        '<b>Фулл-хаус</b> — три одного числа і два іншого; 25 очків.',
        '<b>Малий стріт</b> — 4 кубика підряд (1-2-3-4, 2-3-4-5 або 3-4-5-6); 30 очків.',
        '<b>Великий стріт</b> — 5 кубиків підряд (1-2-3-4-5 або 2-3-4-5-6); 40 очків.',
        '<b>Яцзи (5 в однакових)</b> — п’ять однакових кубиків; 50 очків. Кожен наступний Яцзи — +100.',
        '<b>Шанс</b> — сума будь-яких п’яти кубиків.'
      ],
      rollBtn: '🎲 Кинути кубики',
      rollCount: 'Кидок {{n}}/{{max}}',
      heldHint: 'Тапни кубик, щоб залишити',

      shakeBtn: '📳 Трясти',
      shakeDenied: 'Доступ запрещён',
      shakeError: 'Тряска недоступна',
      shakeUnsupported: 'Тряска не поддерживается',
      shakeDenied: 'Доступ заборонено',
      shakeError: 'Тряска недоступна',
      shakeUnsupported: 'Тряска не підтримується',
      suggestTitle: 'Пропозиції для активного гравця',
      suggestPlayer: 'Гравцю',
      suggestNone: 'Немає підходящої комбінації.',
      overwritePrompt: 'У {{row}} вже є очки. Перезаписати?',
      diceModeLabel: 'Віртуальні кубики',
      manualSuggestBtn: 'Підказки',
      rows: {
        ones: ['Одиниці', '× 1'],
        twos: ['Двійки', '× 2'],
        threes: ['Трійки', '× 3'],
        fours: ['Четвірки', '× 4'],
        fives: ['П’ятірки', '× 5'],
        sixes: ['Шістки', '× 6'],
        threeKind: ['3 в однакових', '3 однакові · сума'],
        fourKind: ['4 в однакових', '4 однакові · сума'],
        fullHouse: ['Фулл-хаус', '3 + 2 · 25'],
        smallStraight: ['Малий стріт', '4 підряд · 30'],
        largeStraight: ['Великий стріт', '5 підряд · 40'],
        poker: ['Яцзи', '5 однакових · 50'],
        chance: ['Шанс', 'будь-які 5 кубиків'],
        pokerBonus: ['Бонус Яцзи', '+100 за кожен зайвий']
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
      rulesSummary: 'Как оценивать комбинации',
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
        '<b>3 одинаковых</b> — три одинаковых кубика; сумма всех пяти кубиков.',
        '<b>4 одинаковых</b> — четыре одинаковых кубика; сумма всех пяти кубиков.',
        '<b>Фулл-хаус</b> — три одного числа и два другого; 25 очков.',
        '<b>Малый стрит</b> — 4 кубика подряд (1-2-3-4, 2-3-4-5 или 3-4-5-6); 30 очков.',
        '<b>Большой стрит</b> — 5 кубиков подряд (1-2-3-4-5 или 2-3-4-5-6); 40 очков.',
        '<b>Яхцзы (покер / 5 одинаковых)</b> — пять одинаковых кубиков; 50 очков. Каждый следующий Яхцзы — бонус +100.',
        '<b>Шанс</b> — сумма любых пяти кубиков.'
      ],
      rollBtn: '🎲 Бросить кубики',
      rollCount: 'Бросок {{n}}/{{max}}',
      heldHint: 'Тапни кубик, чтобы оставить',

      shakeBtn: '📳 Трясти',
      suggestTitle: 'Варианты для активного игрока',
      suggestPlayer: 'Игроку',
      suggestNone: 'Нет подходящей комбинации.',
      overwritePrompt: 'В {{row}} уже есть очки. Перезаписать?',
      diceModeLabel: 'Виртуальные кубики',
      manualSuggestBtn: 'Варианты',
      rows: {
        ones: ['Единицы', '× 1'],
        twos: ['Двойки', '× 2'],
        threes: ['Тройки', '× 3'],
        fours: ['Четверки', '× 4'],
        fives: ['Пятерки', '× 5'],
        sixes: ['Шестерки', '× 6'],
        threeKind: ['3 одинаковых', '3 одинаковых · сумма'],
        fourKind: ['4 одинаковых', '4 одинаковых · сумма'],
        fullHouse: ['Фулл-хаус', '3 + 2 · 25'],
        smallStraight: ['Малый стрит', '4 подряд · 30'],
        largeStraight: ['Большой стрит', '5 подряд · 40'],
        poker: ['Яхцзы', '5 одинаковых · 50'],
        chance: ['Шанс', 'любые 5 кубиков'],
        pokerBonus: ['Бонус Яхцзы', '+100 за каждый лишний']
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
    { key: 'smallStraight', type: 'fixed', fixedValue: 30 },
    { key: 'largeStraight', type: 'fixed', fixedValue: 40 },
    { key: 'poker', type: 'fixed', fixedValue: 50 },
    { key: 'chance', type: 'number', max: 30 },
    { key: 'pokerBonus', type: 'number', max: 1000 }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    setup: $('setup'), game: $('game'), status: $('status'),
    playerCount: $('playerCount'), names: $('nameFields'), title: $('gameTitle'),
    table: $('scoreTable'), leaderboard: $('leaderboard'), tabs: $('playerTabs'),
    foot: $('netInfo'), undoBtn: $('undoBtn'), langSelect: $('langSelect'), rulesList: $('rulesList'),
    diceMode: $('diceMode'), diceStage: $('diceStage'), manualDice: $('manualDice'),
    manualRow: $('manualRow'), manualSuggestBtn: $('manualSuggestBtn')
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
        if (window.DICE) window.DICE.reset();
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
    if (typeof state.diceMode !== 'boolean') state.diceMode = true;
    els.setup.classList.add('hidden');
    els.game.classList.remove('hidden');
    lastAction = null;
    if (els.undoBtn) els.undoBtn.disabled = true;
    render();
  }

  function nextPlayer(currentIdx) {
    if (!state) return;
    var idx = (typeof currentIdx === 'number') ? currentIdx : (state.mobileIdx || 0);
    state.mobileIdx = (idx + 1) % state.players.length;
    if (window.DICE) window.DICE.reset();
    if (els.manualRow) {
      Array.prototype.slice.call(els.manualRow.querySelectorAll('input')).forEach(function (inp) { inp.value = '1'; });
    }
    render();
  }

  function createGame() {
    var n = Number(els.playerCount.value);
    var names = Array.prototype.slice.call(els.names.querySelectorAll('input'))
      .map(function (el, i) { return (el.value || '').trim() || (t('playerNamePlaceholder') + ' ' + (i + 1)); })
      .slice(0, n);
    openGame({ players: names, scores: emptyScores(names.length), diceMode: els.diceMode ? els.diceMode.checked : true });
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


  // ---- Virtual 3D dice roller (CSS 3D + vanilla JS) ----
  var DICE = (function () {
    var tray = document.getElementById('diceTray');
    var diceMeta = document.getElementById('diceMeta');
    var rollCountEl = document.getElementById('rollCount');
    var heldHintEl = document.getElementById('heldHint');
    var resultDice = document.getElementById('resultDice');
    var suggestions = document.getElementById('suggestions');
    var rollResult = document.getElementById('rollResult');
    var rollBtn = document.getElementById('rollBtn');
    var shakeBtn = document.getElementById('shakeBtn');
    var diceStage = document.getElementById('diceStage');
    var manualDice = document.getElementById('manualDice');
    var manualRow = document.getElementById('manualRow');
    var manualSuggestBtn = document.getElementById('manualSuggestBtn');

    var DICE_COUNT = 5;
    var MAX_ROLLS = 3;
    var FACE = {
      1: [0, 0], 2: [0, -90], 3: [-90, 0], 4: [90, 0], 5: [0, 90], 6: [0, -180]
    };

    var turnState = null;

    function resetTurn() {
      turnState = {
        currentRoll: 0,
        values: [0, 0, 0, 0, 0],
        held: [false, false, false, false, false]
      };
      if (tray) {
        var cubes = tray.querySelectorAll('.die');
        for (var i = 0; i < cubes.length; i++) {
          cubes[i].style.transition = 'transform 0.35s ease';
          cubes[i].style.transform = 'rotateX(-22deg) rotateY(-28deg)';
        }
      }
      if (rollResult) rollResult.classList.add('hidden');
      if (suggestions) suggestions.innerHTML = '';
      updateMeta();
      applyHeldVisuals();
    }

    function createDie(idx) {
      var s = document.createElement('div');
      s.className = 'die-scene';
      s.setAttribute('data-idx', idx);
      var c = document.createElement('div');
      c.className = 'die';
      [1, 2, 3, 4, 5, 6].forEach(function (n) {
        var f = document.createElement('div');
        f.className = 'face f' + n;
        f.setAttribute('data-face', n);
        c.appendChild(f);
      });
      s.appendChild(c);
      return { scene: s, cube: c };
    }

    function renderTray() {
      if (!tray) return;
      tray.innerHTML = '';
      for (var i = 0; i < DICE_COUNT; i++) {
        var d = createDie(i);
        tray.appendChild(d.scene);
      }
      if (!turnState) resetTurn();
      applyHeldVisuals();
    }

    function randomFace() { return 1 + Math.floor(Math.random() * 6); }

    function count(hand) {
      var c = {};
      hand.forEach(function (v) { c[v] = (c[v] || 0) + 1; });
      return c;
    }

    function sum(hand) { return hand.reduce(function (a, b) { return a + b; }, 0); }

    function hasSequence(hand, len) {
      var u = {};
      hand.forEach(function (v) { u[v] = 1; });
      var keys = Object.keys(u).map(Number).sort(function (a, b) { return a - b; });
      var seq = 1, best = 1;
      for (var i = 1; i < keys.length; i++) {
        if (keys[i] === keys[i - 1] + 1) { seq++; best = Math.max(best, seq); }
        else { seq = 1; }
      }
      return best >= len;
    }

    function analyze(hand) {
      var c = count(hand);
      var maxCount = 0; for (var k in c) if (c[k] > maxCount) maxCount = c[k];
      var hasTwo = false, hasThree = false;
      for (var kk in c) {
        if (c[kk] === 2) hasTwo = true;
        if (c[kk] === 3) hasThree = true;
      }
      var s = sum(hand);
      var res = [];
      [1, 2, 3, 4, 5, 6].forEach(function (v) {
        if (c[v]) res.push({ key: 'ones,twos,threes,fours,fives,sixes'.split(',')[v - 1], label: I18N[lang].rows[v === 1 ? 'ones' : v === 2 ? 'twos' : v === 3 ? 'threes' : v === 4 ? 'fours' : v === 5 ? 'fives' : 'sixes'][0], value: c[v] * v });
      });
      res.push({ key: 'threeKind', label: I18N[lang].rows.threeKind[0], value: maxCount >= 3 ? s : 0 });
      res.push({ key: 'fourKind', label: I18N[lang].rows.fourKind[0], value: maxCount >= 4 ? s : 0 });
      res.push({ key: 'fullHouse', label: I18N[lang].rows.fullHouse[0], value: (hasTwo && hasThree) ? 25 : 0 });
      res.push({ key: 'smallStraight', label: I18N[lang].rows.smallStraight[0], value: hasSequence(hand, 4) ? 30 : 0 });
      res.push({ key: 'largeStraight', label: I18N[lang].rows.largeStraight[0], value: hasSequence(hand, 5) ? 40 : 0 });
      res.push({ key: 'poker', label: I18N[lang].rows.poker[0], value: maxCount >= 5 ? 50 : 0 });
      res.push({ key: 'chance', label: I18N[lang].rows.chance[0], value: s });
      return res;
    }

    function updateMeta() {
      if (!rollCountEl || !heldHintEl) return;
      rollCountEl.textContent = t('rollCount', { n: turnState ? turnState.currentRoll : 0, max: MAX_ROLLS });
      heldHintEl.textContent = t('heldHint');
    }

    function setDiceMode(mode) {
      if (!diceStage) return;
      var rollActions = rollBtn ? rollBtn.parentElement : null;
      if (mode) {
        diceStage.classList.remove('manual');
        if (tray) tray.classList.remove('hidden');
        if (diceMeta) diceMeta.classList.remove('hidden');
        if (rollActions) rollActions.classList.remove('hidden');
        if (manualDice) manualDice.classList.add('hidden');
      } else {
        diceStage.classList.add('manual');
        if (tray) tray.classList.add('hidden');
        if (diceMeta) diceMeta.classList.add('hidden');
        if (rollActions) rollActions.classList.add('hidden');
        if (manualDice) manualDice.classList.remove('hidden');
      }
      resetTurn();
    }

    function manualSuggest() {
      if (!manualRow || !state) return;
      var inputs = manualRow.querySelectorAll('input');
      var values = [];
      for (var i = 0; i < inputs.length; i++) {
        var v = Math.max(1, Math.min(6, Math.trunc(Number(inputs[i].value) || 1)));
        values.push(v);
        inputs[i].value = String(v);
      }
      turnState = { currentRoll: 1, values: values, held: [false, false, false, false, false] };
      updateMeta();
      showResult(values);
    }

    function applyHeldVisuals() {
      if (!tray || !turnState) return;
      var scenes = tray.querySelectorAll('.die-scene');
      turnState.held.forEach(function (held, i) {
        scenes[i].classList.toggle('held', held);
      });
    }

    function toggleHold(idx) {
      if (!turnState || turnState.currentRoll === 0) return;
      turnState.held[idx] = !turnState.held[idx];
      applyHeldVisuals();
    }

    function startRolling() {
      if (!tray || !turnState) return;
      if (turnState.currentRoll >= MAX_ROLLS) {
        if (navigator.vibrate) navigator.vibrate(30);
        return;
      }
      turnState.currentRoll++;
      updateMeta();
      if (rollResult) rollResult.classList.add('hidden');
      if (suggestions) suggestions.innerHTML = '';
      if (navigator.vibrate) navigator.vibrate(30);

      var cubes = Array.prototype.slice.call(tray.querySelectorAll('.die'));
      cubes.forEach(function (cube, i) {
        if (turnState.held[i]) return;
        turnState.values[i] = randomFace();
        var v = turnState.values[i];
        var view = FACE[v];
        var x = view[0] + 360 * (3 + Math.floor(Math.random() * 2));
        var y = view[1] + 360 * (3 + Math.floor(Math.random() * 2));
        cube.style.transition = 'transform 0.85s cubic-bezier(0.18, 0.9, 0.32, 1.05)';
        cube.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
      });

      setTimeout(function () {
        sortTray();
        showResult(turnState.values);
      }, 900);
    }

    function sortTray() {
      if (!tray || !turnState) return;
      var scenes = Array.prototype.slice.call(tray.querySelectorAll('.die-scene'));
      if (scenes.length !== DICE_COUNT) return;
      var order = scenes.map(function (_, i) { return i; });
      order.sort(function (a, b) { return turnState.values[a] - turnState.values[b]; });
      var sortedValues = order.map(function (i) { return turnState.values[i]; });
      var sortedHeld = order.map(function (i) { return turnState.held[i]; });
      turnState.values = sortedValues;
      turnState.held = sortedHeld;
      order.forEach(function (oldIndex, newIndex) {
        var scene = scenes[oldIndex];
        scene.setAttribute('data-idx', String(newIndex));
        tray.appendChild(scene);
      });
      applyHeldVisuals();
    }

    function showResult(hand) {
      if (!resultDice) return;
      resultDice.innerHTML = '';
      hand.slice().sort(function (a, b) { return a - b; }).forEach(function (v, i) { resultDice.appendChild(createResultPip(v, i)); });
      if (rollResult) rollResult.classList.remove('hidden');
      var opts = analyze(hand).filter(function (o) { return o.value > 0; }).sort(function (a, b) { return b.value - a.value; });
      if (!suggestions) return;
      suggestions.innerHTML = '';
      if (opts.length === 0) { suggestions.textContent = t('suggestNone'); return; }

      var mobile = isMobile();
      var selectedIdx = mobile ? (state.mobileIdx || 0) : 0;

      if (!mobile) {
        var playerBar = document.createElement('div');
        playerBar.className = 'suggest-player-bar';
        var playerLabel = document.createElement('span');
        playerLabel.className = 'suggest-player-label';
        playerLabel.textContent = t('suggestPlayer');
        playerBar.appendChild(playerLabel);

        var playerChips = document.createElement('div');
        playerChips.className = 'player-chips';
        function renderChips() {
          playerChips.innerHTML = '';
          state.players.forEach(function (name, i) {
            var chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'player-chip' + (i === selectedIdx ? ' active' : '');
            chip.textContent = name;
            chip.addEventListener('click', function () {
              selectedIdx = i;
              renderChips();
            });
            playerChips.appendChild(chip);
          });
        }
        renderChips();
        playerBar.appendChild(playerChips);
        suggestions.appendChild(playerBar);
      }

      var title = document.createElement('div');
      title.className = 'suggest-title';
      title.textContent = t('suggestTitle');
      suggestions.appendChild(title);
      opts.forEach(function (o) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'suggest-btn';
        b.textContent = o.label + ' · ' + o.value;
        b.addEventListener('click', function () {
          if (!state) return;
          var cur = state.scores[o.key][selectedIdx];
          if (cur !== '') { if (!confirm(t('overwritePrompt', { row: o.label }))) return; }
          setCell(o.key, selectedIdx, String(o.value));
          nextPlayer(selectedIdx);
        });
        suggestions.appendChild(b);
      });
    }

    function createResultPip(n, idx) {
      var el = document.createElement('span');
      el.className = 'pip-result p' + n;
      el.textContent = n;
      return el;
    }

    var lastAcc = null;
    var lastShake = 0;
    var SHAKE_THRESHOLD = 7;
    var SHAKE_DEBOUNCE = 250;
    var SHAKE_COOLDOWN = 1500;
    var shakeTimer = null;

    function onMotion(e) {
      var acc = e.accelerationIncludingGravity || e.acceleration;
      if (!acc || acc.x == null || acc.y == null || acc.z == null) return;
      var now = Date.now();
      if (now - lastShake < SHAKE_COOLDOWN) return;
      if (!lastAcc) { lastAcc = { x: acc.x, y: acc.y, z: acc.z }; return; }
      var dx = acc.x - lastAcc.x, dy = acc.y - lastAcc.y, dz = acc.z - lastAcc.z;
      lastAcc = { x: acc.x, y: acc.y, z: acc.z };
      var delta = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (delta > SHAKE_THRESHOLD) {
        if (shakeTimer) clearTimeout(shakeTimer);
        shakeTimer = setTimeout(function () {
          if (turnState && turnState.currentRoll < MAX_ROLLS) {
            startRolling();
            lastShake = Date.now();
          }
        }, SHAKE_DEBOUNCE);
      }
    }

    function requestShake() {
      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission().then(function (s) {
          if (s === 'granted') {
            window.addEventListener('devicemotion', onMotion, { passive: true });
            if (shakeBtn) { shakeBtn.classList.add('active'); shakeBtn.textContent = t('shakeBtn'); }
          } else {
            if (shakeBtn) shakeBtn.textContent = t('shakeDenied') || 'Permission denied';
          }
        }).catch(function (err) {
          if (shakeBtn) shakeBtn.textContent = (t('shakeError') || 'Shake unavailable') + (err && err.message ? ': ' + err.message : '');
        });
      } else if ('DeviceMotionEvent' in window) {
        window.addEventListener('devicemotion', onMotion, { passive: true });
        if (shakeBtn) { shakeBtn.classList.add('active'); shakeBtn.textContent = t('shakeBtn'); }
      } else {
        if (shakeBtn) shakeBtn.textContent = t('shakeUnsupported') || 'Shake unsupported';
      }
    }

    function bind() {
      renderTray();
      if (rollBtn) {
        // One completed throw per deliberate tap. bind() runs on init and game start,
        // so use an onclick property rather than accumulating listeners; do not also
        // roll on mousedown/touchstart, because that double-counts a single tap.
        rollBtn.onclick = function (e) { e.preventDefault(); startRolling(); };
      }
      if (shakeBtn) shakeBtn.onclick = requestShake;
      if (manualSuggestBtn) manualSuggestBtn.onclick = manualSuggest;
      if (tray) {
        tray.onclick = function (e) {
          var scene = e.target.closest('.die-scene');
          if (!scene) return;
          var idx = Number(scene.getAttribute('data-idx'));
          toggleHold(idx);
        };
        tray.ontouchstart = function (e) {
          var scene = e.target.closest('.die-scene');
          if (!scene) return;
          e.preventDefault();
          var idx = Number(scene.getAttribute('data-idx'));
          toggleHold(idx);
        };
      }
    }

    window.DICE = { bind: bind, start: startRolling, stop: null, reset: resetTurn, setMode: setDiceMode, test: function(h){ return analyze(h).filter(function(x){return x.value>0;});} };
    return window.DICE;
  })();
  // bind dice after creating game so tray exists; also bind once on init
  var originalOpenGame = openGame;
  openGame = function (st) { originalOpenGame(st); DICE.bind(); if (st && typeof st.diceMode === 'boolean') DICE.setMode(st.diceMode); };
  DICE.bind();

  renderLabels();
  nameFields();
  setStatus('');
})();
