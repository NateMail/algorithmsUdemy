/*
    Write a function called sumZero which accepts a sorted array of integers.  The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefinded if a pair does not exist

    sumZero([-3, -2, -1, 0, 1, 2, 3]) [-3, 3]
    sumZero([-2, 0, 1, 3]) undefinded
    sumZero([1, 2, 3]) undefinded
*/

// basic solution
// Time Complexity - O(n**2)
// Space Complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Refactored
// Time Complexity O(n)
// Space Complexity - O(1)
function sumZeroRefactored(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      // if sum equals zero return
      return [arr[left], arr[right]];
      // if sum is greater than zero move one position towards the center from the right
    } else if (sum > 0) {
      right--;
      // if the sum is less than zero move one position towards the center form the left
    } else {
      left++;
    }
  }
}

console.log(sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 5]));
