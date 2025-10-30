`use strict`;

function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1990 && birthYear <= 2005) {
      var millenial = true; // old JS way //function scope
      const str = `your are a gen Z, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = `Bani`;
calcAge(2002);
console.log();
