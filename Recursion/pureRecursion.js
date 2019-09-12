function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));

/*
collectOddValues([1, 2, 3, 4, 5])
[1].concat(collectOddValues([2, 3, 4, 5]))
    [].concat(collectOddValues([3, 4, 5]))
        [3].concat(collectOddValues[4, 5])
            [].concate(collectOddVaules[5])
                [5].concat(collectOddValues[])
                [5]
                then returns newArr

*/
