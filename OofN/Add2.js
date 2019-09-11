function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpTo(6));

/* Notes
to check in the browser the speed use:
let t1 = preformance.now();
addUpTo(1000000000);
let t2 = preformance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

This will give you the amount of time that has passed.

This runs faster than the function in Add1.js

This has a big O of 1.  O(1) meaning that as n grows it has no change in run time. 
*/
