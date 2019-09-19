// Fibonacci sequence
function fib(num) {
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
}

// Different version
function fibb(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibb(num - 1) + fibb(num - 2);
}
