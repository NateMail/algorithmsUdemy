// Write a function that takes an array of numbers and returns the product of all of them.
function productOfArray(arr) {
  let total = 1;
  arr.forEach(num => {
    total *= num;
  });
  return total;
}
