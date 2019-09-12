// Write a funciton that takes a number and returns all the numbers up to that number added up.

function recursiveRange(num) {
  let total = 0;

  function helper(num) {
    while (num > 0) {
      total += num;
      num--;
    }
  }
  helper(num);

  return total;
}
