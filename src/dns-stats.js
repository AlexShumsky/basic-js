const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const sortedDomains = domains.map((domain) => domain.split(".").reverse());
  sortedDomains.forEach((domain) =>
    domain.reduce((newDomain, el) => {
      const customDomain = newDomain + "." + el;
      if (result[customDomain]) {
        result[customDomain] += 1;
      } else {
        result[customDomain] = 1;
      }
      return customDomain;
    }, "")
  );
  return result;
}
module.exports = {
  getDNSStats,
};
