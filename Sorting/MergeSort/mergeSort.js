/*
    . In order to imlement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.

    . Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays. 

    . This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

    .Create an empty array, take a look at the smallest values in each input array
    . While there are still values we haven't looked at...
        . If the value in the first array is smaller than the value in the second array, push the value in the first array inot our result and move on to the next value in the first array.
        .If the value in the first array is larger than the value in the sedond array, push the value in the second array into our results and move on to the next value in the second array.
        .Once we exhaust one array, push in all remaining values from the other array. 

*/

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));

/*
    1. Break up the array into halves until you have arrays that are empty or have one element.
    2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
    3. Once the array has been merged back together, return the merged (and sorted!) array 
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
