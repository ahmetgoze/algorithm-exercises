// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   // aaaaabbbcccddd
//   const chars = {};

//   for (const char of str) {
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }
// }

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (const char in chars) {
    if (max < chars[char]) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}
maxChar("asdasdeeee");
maxChar("aaaddddddee");
module.exports = maxChar;
