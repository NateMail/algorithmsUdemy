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

function dynamicFibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = dynamicFib(n - 1, memo) + dynamicFib(n - 2, memo);
  memo[n] = res;
  return res;
}
// Big O of dynamic memoization O(N)

/*
        Tablulation 
.Storing the result of a previous result in a "table" (usually an array)
.Usually done using iteration 
.Better space complexity can be achieved using tabulation 
*/
function dynamicFibTab(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(dynamicFibTab(10));
