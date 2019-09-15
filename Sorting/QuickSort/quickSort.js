/*
. In order to implement quick sort, it's useful to first impelment a function responsible arranging elements in an array on either side of a pivot.
. Given an array, this helper function should designate an elment as the pivot.
. It should then rearrange elements in the array so that all values less thanthe pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
. The order of elements on eighter side of the pivot doesn't matter!
. The helper should do this in place, that is, it should not create a new array
. When complete, the helper should return the index of the pivot 
*/

/*
    . It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    . Grab the pibot from the start of the array
    . Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    . Loop through the array from the start until the end.
        . If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
    .Swap the starting element(i.e. the pivot) with the pivot index 
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]));

// Pivot rewritten in ES2015
function pivotES2015(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, indx1, indx2) => {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(pivotES2015([9, 4, 8, 2, 1, 5, 7, 6, 3]));

/*
    . Call the pivot helper on the array
    . When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index. 
    . Your base case occurs when you consider a subarray with less than 2 elements.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
