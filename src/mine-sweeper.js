const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const array = [];
  for (const items of matrix) {
      const matrixItem = [];
      for (const item of items) {
          matrixItem.push(0);
      }
      array.push(matrixItem);
  }    

  for (let i = 0; i < matrix.length; i++) {
      const items = matrix[i];
      for (let j = 0; j < items.length; j++) {
          const item = items[j];
          if (item) {
              if (matrix[i - 1]) {
                  if (matrix[i - 1][j - 1] !== undefined) array[i - 1][j - 1] += 1;
                  if (matrix[i - 1][j] !== undefined) array[i - 1][j] += 1;
                  if (matrix[i - 1][j + 1] !== undefined) array[i - 1][j + 1] += 1;
              }
              if (matrix[i][j - 1] !== undefined) array[i][j - 1] += 1;
              if (matrix[i][j + 1] !== undefined) array[i][j + 1] += 1;
              if (matrix[i + 1]) {
                  if (matrix[i + 1][j - 1] !== undefined) array[i + 1][j - 1] += 1;
                  if (matrix[i + 1][j] !== undefined) array[i + 1][j] += 1;
                  if (matrix[i + 1][j + 1] !== undefined) array[i + 1][j + 1] += 1;
              }
          }
      }
  }
  return array;
}

module.exports = {
  minesweeper
};
