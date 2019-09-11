/*
    Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.  The frequency of values must be the same.  

    EXAMPLES:
    same([1, 2, 3], [4, 1, 9]) = true;
    same([1, 2, 3], [1, 9]) = false;
    same([1, 2, 1], [4, 4, 1]) = false; (must be same frequency)
*/

// basic solution
// O(n**2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // removes the index with the correct value so it only has the correct frequency
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored
// O(n)
function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Creates two objects that keep track of every value and how frequently they occur
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    // if there is a square of the key in the frequencyCounter1 in frequencyCouter2
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // key is from the frequencyCounter1 loop! Checking to see if the value of the key in frequencyCounter2 is equal to the value of the key in frequencyCounter1
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
