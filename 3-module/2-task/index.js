// function returns new array inside the range given
// @param arr - number array;  a - min number; b - max number.
function filterRange(arr, a, b) {
  let newArray = arr.filter(number => number >= a && number <= b);
  return newArray;
}
