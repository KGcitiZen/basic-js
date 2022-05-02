const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.count = 0;
  }
  calculateDepth(arr, depthCount = 1) {
    let countedStatus = false;
    let i = 0;
    while (i < arr.length) {
      if (Array.isArray(arr[i])) {
        if (countedStatus === false) {
          depthCount += 1;
        }
        this.calculateDepth(arr[i], depthCount);
        countedStatus = true;
      }
      i += 1;
    }
    if (depthCount > this.count) {
      this.count = depthCount;
    }
    depthCount = 1;
    return this.count;
  }
}

module.exports = {
  DepthCalculator
};
