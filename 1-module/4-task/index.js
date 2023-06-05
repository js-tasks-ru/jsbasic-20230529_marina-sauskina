/*function checks on Spam in name of a letter. ('1xBet' or 'XXX') register nonsensitive
 * @param str - letter's name
 * returns boolean
 */

function checkSpam(str) {
  return str.toLowerCase().includes("1xbet") || str.toLowerCase().includes("xxx");
}
