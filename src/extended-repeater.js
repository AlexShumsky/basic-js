const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };
  for (let key in options) {
    newOptions[key] = options[key];
  }
  function getAdittion(str) {
    let funcResult = "";
    for (let i = 0; i < newOptions.additionRepeatTimes; i++) {
      funcResult += newOptions.addition + newOptions.additionSeparator;
    }
    return (
      str +
      funcResult.slice(
        0,
        funcResult.length - newOptions.additionSeparator.length
      )
    );
  }

  let result = "";
  for (let i = 0; i < newOptions.repeatTimes; i++) {
    result += getAdittion(str) + newOptions.separator;
  }
  return result.slice(0, result.length - newOptions.separator.length);
}

module.exports = {
  repeater,
};
