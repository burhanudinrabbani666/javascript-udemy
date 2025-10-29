'use strict';

const measurKelvin = function () {
  const measurment = {
    type: `temp`,
    unit: `celsius`,

    // C) FIx
    value: 10,
  };

  // B) Find
  console.table(measurment);
  console.log(measurment.value);
  // console.warn(measurment.value);
  // console.error(measurment.value);

  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) Indetify debug
console.log(measurKelvin());

function calcAvargeGithubCommit(params) {
  let submitCount = 0;

  for (let index = 0; index < params.length; index++) {
    submitCount += params[index];
  }

  console.log(`${submitCount / params.length} avarege commit a Day`);
}

const baniGithub = [4, 3, 3, 10, 3, 4, 8, 3];
console.log(baniGithub);

calcAvargeGithubCommit(baniGithub);
