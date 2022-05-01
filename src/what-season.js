const { NotImplementedError } = require("../extensions/index.js");

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
  if (!date) return "Unable to determine the time of year!";
  if (
    !(typeof date === "object") ||
    Array.isArray(date) ||
    !date.getMonth ||
    date.hasOwnProperty("toString")
  ) {
    throw new Error("Invalid date!");
  }

  const seasons = {
    0: "winter",
    1: "spring",
    2: "summer",
    3: "autumn",
  };
  return date.getMonth() < 2 || date.getMonth() == 11
    ? seasons[0]
    : date.getMonth() < 5
    ? seasons[1]
    : date.getMonth() < 8
    ? seasons[2]
    : seasons[3];
}

module.exports = {
  getSeason,
};
