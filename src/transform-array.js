const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const direction = {
    prev: -1,
    next: 1,
  };
  let result = arr;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      const commands = arr[i].split("-");
      if (commands[2] === "double") {
        result.splice(result[i - 1], 1, result[i + direction[commands[3]]]);
      } else if (commands[2] === "discard") {
        //result.splice(i + direction[commands[3]] + direction[commands[3]] === 'next' ?  -1 : 0, 2));
        result.splice(
          i + (commands[3] === "prev" ? direction[commands[3]] : 0),
          2
        );
      }
    }
  }
  return result;
}
//console.log(transform([1, 2, 3, "--double-prev", 4, 5])); // => [1, 2, 3, 4, 4, 5]
console.log(transform([1, 2, 3, "--discard-prev", 4, 5])); // => [1, 2, 3, 4, 4, 5]
console.log(transform([1, 2, 3, "--discard-next", 4, 5])); // => [1, 2, 3, 4, 4, 5]
module.exports = {
  transform,
};
