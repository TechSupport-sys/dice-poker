# Dice Poker Scorecard

A simple, mobile-first web scorecard for dice poker (Yahtzee-style). No accounts, no tracking, no server — scores live only in the current browser tab.

## Play

Open [https://dice.fvn-net.org](https://dice.fvn-net.org) on your phone, tablet or desktop, pick the number of players, enter names and start scoring.

Languages: English, Ukrainian, Russian.

## Rules

- **Upper section** — enter how many dice of each face you rolled (0–5). Score = count × face. 63+ gives a +35 bonus.
- **Three of a kind** — sum of all five dice.
- **Small 4 of a kind** — four identical dice; sum of all five dice.
- **Full house** — 25 points.
- **Large 5 of a kind** — 50 points.
- **Chance** — sum of any five dice.
- **Poker bonus** — +100 for each additional five-of-a-kind.

## Tech

Pure static HTML/CSS/JS. No build step, no server. Deployed to `/var/www/dice-poker` on an Apache vhost.

## License

MIT
