// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = {};

  for (char of str) {
    hash[char] = (hash[char] || 0) + 1;
  }

  const sortableChars = [];
  for (char in hash) {
    sortableChars.push([char, hash[char]]);
  }

  return sortableChars.sort((a, b) => b[1] - a[1])[0][0];
}

module.exports = maxChar;
