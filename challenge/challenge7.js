const mark = {
  fullName: `Mark Miller`,
  mass: 78,
  height: 1.69,

  // calcBMI: function () {
  //   return this.mass / (this.height * this.height);
  // },

  // bmi: function () {
  //   return this.calcBMI();
  // },

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: `John Smith`,
  mass: 92,
  height: 1.95,

  // calcBMI: function () {
  //   return this.mass / (this.height * this.height);
  // },

  // bmi: function () {
  //   return this.calcBMI();
  // },

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(
  `${
    mark.calcBMI() > john.calcBMI()
      ? `${mark.fullName} (${mark.calcBMI()}) is higher than ${
          john.fullName
        } (${john.calcBMI()})`
      : `${john.fullName} (${john.calcBMI()}) is higher than ${
          mark.fullName
        } (${mark.calcBMI()})`
  }`
);
