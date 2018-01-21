// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const cleanString = str => str.replace(/[^\w]/g, '').toLowerCase();

const getCharMap = str => {
  const charMap = {};

  for (char of str) {
    charMap[char] = 1 || charMap[char] + 1;
  }

  return charMap;
};

function anagrams(stringA, stringB) {
  const stringAMap = getCharMap(cleanString(stringA));
  const stringBMap = getCharMap(cleanString(stringB));

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) return false;

  let isAnagram = true;
  for (key in stringAMap) {
    if (stringAMap[key] !== stringBMap[key]) isAnagram = false;
  }

  return isAnagram;
}

module.exports = anagrams;
