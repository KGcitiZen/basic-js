const { NotImplementedError } = require('../extensions/index.js');

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
  let result = [];
  let addArray = [];

  for (i = 0; i < (options.additionRepeatTimes || 1); i++) {
    if (options.addition !== undefined) {
      let add = String(options.addition);
      addArray.push(add);
    }
  }

  let string = addArray.join(options.additionSeparator || "|");

  for (i = 0; i < (options.repeatTimes); i++) {
    result.push(str + string);
  }

  return result.join(options.separator || "+");
}

module.exports = {
  repeater
};
