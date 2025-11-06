const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//1.
const [players1, players2] = game.players;

//2.
const [gk, ...fieldPlayers] = players1;

//3.
const allPlayers = [...players1, ...players2];

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//5
const {
  odds: { team1, vvx: draw, team2 },
} = game;

//6.

function printGoals(...player) {
  console.log(`${player.length} goals scored`);
}

printGoals(...game.scored);

//7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);



// 1.
for (const [index, player] of Object.entries(game.scored)) {
  console.log(`goal ${Number(index) + 1}: ${player}`);
}

// 2.

let avarage = 0;
const oddsValue = Object.values(game.odds);

for (const value of oddsValue) {
  avarage += value;
}
console.log(avarage / oddsValue.length);

// 3.

const odd = Object.entries(game.odds);

for (const [team, odd] of odd) {
  const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`;
  console.log(`Odd ${teamStr} ${odd}`);
}
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(
  `an Event happened, on avarage, every ${90 / gameEvents.size} minutes`
);
