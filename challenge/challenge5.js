const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= 2 * scoreKoalas) {
    console.log(`Dolphins Win (${scoreDolphins} vs ${scoreKoalas})`);
  } else if (scoreKoalas >= 2 * scoreDolphins) {
    console.log(`koalas Win (${scoreKoalas} vs ${scoreDolphins})`);
  } else {
    console.log(`No Team Wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
