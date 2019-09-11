function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(6));

/* Notes
to check in the browser the speed use:
let t1 = preformance.now();
addUpTo(1000000000);
let t2 = preformance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

This will give you the amount of time that has passed.  

Time can be a problem with tracking algorithims because they can vary greatly form machine to machine.  

This is slower then the function in Add2.js

The number of Operations will slow down the efficientcy of the code.  The number of operators in this are 5n + 2, but regardless of the exact number of operations grows roughly proportionally with n.

This is Big O of n. O(n) meaning that as n grows the run time grows as well.  Meaning that this is linear.  
*/
