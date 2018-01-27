const colorAverage = (first, second) => {
  const getColorArray = str => str.match(/../g).map(val => parseInt(val, 16));
  const getColorAverage = (firstColor, secondColor) => Math.round((firstColor + secondColor) / 2).toString(16);

  const firstNums = getColorArray(first);
  const secondNums = getColorArray(second);

  return [
    getColorAverage(firstNums[0], secondNums[0]),
    getColorAverage(firstNums[1], secondNums[1]),
    getColorAverage(firstNums[2], secondNums[2]),
  ].join('');
};
