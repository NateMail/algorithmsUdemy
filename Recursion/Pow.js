// find a number to the power of the second number

function power(num, ex) {
  if (ex === 0) return 1;
  if (ex === 1) return num;
  return num * power(num, ex - 1);
}
