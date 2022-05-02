const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let stringNumber = n.toString();
  let array = [];

  for (let i = 0; i < stringNumber.length; i++) {
    array.push(stringNumber.replace(stringNumber[i], "")); // пушим в массив все возможные варианты, а дальше сортируем и вытаскиваем последний - наибольший вариант
  }
  array.sort();
  result = array.pop();
  return +result;
}

module.exports = {
  deleteDigit
};
