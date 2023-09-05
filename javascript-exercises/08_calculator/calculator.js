const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let total = 1;
  for (i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
