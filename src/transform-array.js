const { NotImplementedError } = require('../extensions/index.js');

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
  if (Array.isArray(arr) == false) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  
  let result = [...arr];

  for (let i = 0; i < result.length; i++) {
    if (result[i] == '--discard-prev') {
      result[i] = undefined;
      result[i-1] = undefined;
    }
    if (result[i] == '--double-prev') {
      result[i] = result[i-1];
    }
    if (arr[i] == '--double-next') {
      result[i] = result[i+1];
    }
    if (arr[i] == '--discard-next') {
      result[i] = undefined;
      result[i+1] = undefined;
    }
    
  }
  return result.filter(elem => elem != undefined);
}

module.exports = {
  transform
};
