// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let x = 1; x <= n; x++) {
    console.log(
      new Array(n)
        .fill('#', 0, x)
        .fill(' ', x, n)
        .join('')
    );
  }
}

module.exports = steps;
