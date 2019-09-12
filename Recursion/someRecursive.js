//Write a recursive function that takes an array and a callback the funciton returns true if a single value in the array and returns true when passed to the callback.

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
