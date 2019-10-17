// Non dynamic way
function nonDyFib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// Big O of non dynamic O(2**N)

/*
        Memoization
.Storing the results of expensive function calls and returning the cached result when the same inputs occur again 
*/

function dynamicFib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = dynamicFib(n - 1, memo) + dynamicFib(n - 2, memo);
  memo[n] = res;
  return res;
}
// Big O of dynamic O(N)

console.log(dynamicFib(5));
