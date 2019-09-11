/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of the n consecutive elements in the array.


maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)  10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) 17
maxSubarraySum([4, 2, 1, 6], 1) 6
maxSubarraySum([4, 2, 1, 6, 2], 4) 13
maxSubarraySum([], 4) null
*/

// basic approach
// Time Complexity - O{n**2}
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Refactored
// Time Complexity - O(n)
function maxSubarraySumRefactored(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // finds the first index of the previous array subtracts that first value and then adds the next value in the array to the temp sum.
    // example prev = maxsub([1, 2, 3, 4], 3) tempsum = 6;
    // example next = tempsum - arr[0] + arr[3] tempsum = 9;
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumRefactored([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
