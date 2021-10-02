// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//// 1)
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//// 2)
// function reverse(str) {
//   let reversed = [];
//   str.split("").forEach((char) => {
//     reversed.unshift(char);
//   });
//   return reversed.join("");
// }

//// 3)
// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

//// 4)
function reverse(str) {
  return str
    .split("")
    .reduce((reversed, char) => (reversed = char + reversed), "");
}

module.exports = reverse;
