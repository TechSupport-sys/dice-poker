# Dice Poker

A lightweight, static browser scorecard for Yahtzee-style dice games. No server, no storage, no accounts — just open the page, play, and screenshot the result.

Live: https://dice.fvn-net.org

## How to play

1. Choose the number of players (2–12) and enter names.
2. Tap **Roll dice** to roll five virtual 3D dice. On mobile, you can also enable **Shake to roll**.
3. Enter the score into one of the categories, or tap a suggested combination.
4. Fill all categories to finish. The leaderboard and ranking update automatically.
5. Take a screenshot — scores are not saved anywhere.

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

## Languages

- English (default)
- Українська
- Русский

Switch via the dropdown in the top-right corner.

## Tech

Static HTML/CSS/JS. No build step, no external libraries, no network calls. Works offline.

## License

MIT
