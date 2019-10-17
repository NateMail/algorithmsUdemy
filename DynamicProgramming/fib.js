// Non dynamic way
function nonDyFib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
// Big O of non dynamic O(2**N)
