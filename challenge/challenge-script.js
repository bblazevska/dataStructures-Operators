'use strict';

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
 

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Persic'];
console.log(players1Final);

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored. Players that scored are`);
   for (let i = 0; i < num; i++) console.log(playerNames[i]);
}

printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win. `);
team2 < team1 && console.log(`Team 2 is more likely to win. `);
