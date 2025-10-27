// const calcAverage = (a,b, c){
// return (a + b + c) / 3
// } // not good  = to much line

const calcAverage = (a, b, c) => (a + b + c) / 3; // much shorter

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas Win (${avgKoalas} vs ${scoreDolphins})`);
  } else {
    console.log(`No Team Wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
