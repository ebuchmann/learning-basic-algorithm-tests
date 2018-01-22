// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
// matrix(5)
//     [[ 1,  2,  3,  4,  5],
//      [16, 17, 18, 19,  6],
//      [15, 24, 25, 20,  7],
//      [14, 23, 22, 21,  8],
//      [13, 12, 11, 10,  9]],

// if row and column are less than size -> go right
// if column(+1) === size and row less than size -> go down
// if row(+1) === size and column is > 0 -> go left
// else go up until row below starting point
// done with outter loop, go into another loop with different starting points

function matrix(size) {
  const arr = Array(size)
    .fill()
    .map(a => Array(size).fill('-'));

  let count = 1;
  let row = 0;
  let column = 0;
  let finished = false;

  while (!finished) {
    console.log(row, column);
    if (row < size && column < size) {
      arr[row][column] = count++;
      if (column === size - 1) row += 1;
      if (column < size - 1) column += 1;
    } else if (column === size && row < size) {
      arr[row][column - 1] = count++;
      row += 1;
    } else if (row === size && column > 0) {
      arr[row - 1][column - 1] = count++;
      column -= 1;
    } else {
      count++;
    }

    if (count === size * size) finished = true;
  }

  console.log(arr);
}

matrix(3);

module.exports = matrix;
