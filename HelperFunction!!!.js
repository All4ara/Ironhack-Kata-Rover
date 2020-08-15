function multiply(number) {
  return number * (9 / 5);
}

function getFahren(celsius) {
  return multiply(celsius) + 32;
}

console.log(getFahren(20));

/////////// More Advanced with 2 helper functions from scratch //////////////

const celsius = kelToCel(300);

function kelToCel(kelvin) {
  return kelvin - 273;
}


function multiply(celsius) {
  return celsius * (9 / 5);
}

function getFahr() {
  return multiply(celsius) + 32;
}

console.log(getFahr());

