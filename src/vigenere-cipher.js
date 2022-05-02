const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  argumentsCheck(...args) {
    if (
      args.length !== 2 ||
      [...args].some((argument) => argument === undefined)
    ) {
      throw new Error("Incorrect arguments!");
    }
  }
  encrypt(...args) {
    this.argumentsCheck(...args);
    let [message, key] = args;
    key = key.toUpperCase();
    let encrypted = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentChar = message[i].toUpperCase();
      if (currentChar.charCodeAt() >= 65 && currentChar.charCodeAt() <= 90) {
        encrypted += String.fromCharCode(
          ((key[j % key.length].charCodeAt() -
            65 +
            (currentChar.charCodeAt() - 65)) %
            26) +
            65
        );
        j++;
      } else {
        encrypted += currentChar;
      }
    }
    return encrypted;
  }
  decrypt(...args) {
    this.argumentsCheck(...args);
    let [message, key] = args;
    key = key.toUpperCase();
    let decrypted = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentChar = message[i].toUpperCase();
      if (currentChar.charCodeAt() >= 65 && currentChar.charCodeAt() <= 90) {
        decrypted += String.fromCharCode(
          ((currentChar.charCodeAt() - key[j % key.length].charCodeAt() + 26) %
            26) +
            65
        );
        j++;
      } else {
        decrypted += currentChar;
      }
    }
    return decrypted;
  }
}
const test = new VigenereCipheringMachine();

module.exports = {
  VigenereCipheringMachine,
};
