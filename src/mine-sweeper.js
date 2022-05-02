const { NotImplementedError } = require("../extensions/index.js");

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

 *  [true, 0, 0],
 *  [0, true, 0],
 *  [0, 0, 0]
 * ]
 */
function minesweeper(matrix) {
  matrix = matrix.map((arr) =>
    arr.map((el) => {
      if (!el) return 0;
      return el;
    })
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true) {
        if (matrix[i - 1] !== undefined) {
          if (
            matrix[i - 1][j - 1] !== undefined &&
            matrix[i - 1][j - 1] !== true
          ) {
            matrix[i - 1][j - 1]++;
          }
          if (matrix[i - 1][j] !== undefined && matrix[i - 1][j] !== true) {
            matrix[i - 1][j]++;
          }
          if (
            matrix[i - 1][j + 1] !== undefined &&
            matrix[i - 1][j + 1] !== true
          ) {
            matrix[i - 1][j + 1]++;
          }
        }

        if (matrix[i][j - 1] !== undefined && matrix[i][j - 1] !== true) {
          matrix[i][j - 1]++;
        }
        if (matrix[i][j + 1] !== undefined && matrix[i][j + 1] !== true) {
          matrix[i][j + 1]++;
        }
        if (matrix[i + 1] !== undefined) {
          if (
            matrix[i + 1][j - 1] !== undefined &&
            matrix[i + 1][j - 1] !== true
          ) {
            matrix[i + 1][j - 1]++;
          }
          if (matrix[i + 1][j] !== undefined && matrix[i + 1][j] !== true) {
            matrix[i + 1][j]++;
          }
          if (
            matrix[i + 1][j + 1] !== undefined &&
            matrix[i + 1][j + 1] !== true
          ) {
            matrix[i + 1][j + 1]++;
          }
        }
      }
    }
  }
  return matrix.map((arr) =>
    arr.map((el) => {
      if (el === true) return 1;
      return el;
    })
  );
}

module.exports = {
  minesweeper,
};
