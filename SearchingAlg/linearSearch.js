// Write a function that accepts an array and a value
// Loop through the array and check if the current array lement is equal to the value
// if it is, return the index at which the element is found
// If teh value is never found, return -1

// Time complexity O(n)

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4], 0));
