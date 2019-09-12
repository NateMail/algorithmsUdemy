// write a function binarySearch

/*
. This function accepts a sorted array and a value
. Create a left pointer at the start of the array, and a right pointer at the end of the array.
. While the left pointer comes before the right pointer:
    .Create a pointer in the middle
    .If you find the value you want, return the index
    .If the value is too small, move the left pointer up
    .If the value is too small, move the right pointer down.
. If you never find the value, return -1

*/

// Worst and Average case O(log n)
// Best case O(1)

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
