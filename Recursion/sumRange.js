function sumRange(num) {
  // base case
  if (num === 1) return 1;
  // different input
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
/* What's happening
sumRange(3)
    return 3 + sumRange(2) -which then changes this into 3 
        return 2 + sumRange(1)-which then changes this into 1
            return sumRange(1) = 1
*/
