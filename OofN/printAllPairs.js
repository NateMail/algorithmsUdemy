function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(6));

/* Notes 
This is big O of n squared.  O(n**2).  This is quadratic 
*/
