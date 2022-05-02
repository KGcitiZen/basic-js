const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (new Date(date.toString()).getMinutes() === new Date().getMinutes() && new Date(date.toString()).getHours() === new Date().getHours()) {
    throw Error('Invalid date!');
  }

  try {
    const dateMonth = date.getMonth();
    if (dateMonth === 11 || dateMonth === 0 || dateMonth === 1) return 'winter';
    if (dateMonth > 1 && dateMonth < 5) return 'spring';
    if (dateMonth > 4 && dateMonth < 8) return 'summer';
    if (dateMonth > 7 && dateMonth < 11) return 'autumn';
  } catch (e) {
    throw Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
