function logAtLeast5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtLeast5(30));

// O(1)
