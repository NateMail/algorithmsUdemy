// Start by picking the second element in the array.
// Now compare it to the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i. e. the left side) to place the element in the correct place.
// Repeat unitl the array is sorted.
// Return the array.

// Time Complexity
// Worst Case: O(n**2)
// If data almost sorted O(n)

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));