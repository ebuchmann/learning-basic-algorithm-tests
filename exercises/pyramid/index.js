// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const middle = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < n * 2 - 1; column++) {
      if (middle - row <= column && middle + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

pyramid(3);

module.exports = pyramid;

// function pyramid(n) {
//   const columns = n * 2 - 1;
//   const middle = Math.round(columns / 2);

//   for (let x = 1; x <= n; x++) {
//     console.log(
//       new Array(columns)
//         .fill(' ')
//         .fill('#', middle - x, middle + x - 1)
//         .join('')
//     );
//   }
// }
