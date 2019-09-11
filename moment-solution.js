const arr = [5, 2, 3, 1, 7, 6];

function final(arr) {
  let min = Math.min(...arr);
  const lastArrSpot = arr[arr.length - 1];
  let currArr;
  let currentMin;
  let counter = 0;

  function sliced(arr, min) {
    counter++;
    currArr = arr.slice(arr.indexOf(min) + 1);
  }

  sliced(arr, min);

  while (currArr.length > 1) {
    currentMin = Math.min(...currArr);
    sliced(currArr, currentMin);
  }

  if (min === lastArrSpot) {
    return 1;
  } else if (currentMin === lastArrSpot) {
    return counter;
  } else {
    return counter + 1;
  }
}

console.log(final(arr));
