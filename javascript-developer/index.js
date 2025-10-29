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

function calcAvargeGithubCommit(params) {
  let submitCount = 0;

  for (let index = 0; index < params.length; index++) {
    submitCount += params[index];
  }

  console.log(`${submitCount / params.length} avarege commit a Day`);
}

let labels = [`budur`, `babakan`];

function addLabels(newVillageName) {
  const newVillageData = newVillageName;

  const updateVillage = [...labels, newVillageData];
  labels = updateVillage;
  return updateVillage;
}

const userData = [
  {
    fullName: 'Burhanudin Rabbani',
    labels: [labels[0]],
  },
  {
    fullName: `angga`,
    labels: [labels[1]],
  },
];

console.log(userData);

function userAddLabels(data, newValue) {
  data.labels = [...data.labels, newValue];

  return data;
}

console.log(userAddLabels(userData[0], labels[1]));

console.log(userData);
