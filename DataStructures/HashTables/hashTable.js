/*
  .The prime number in the hash is helpful in spreading out the keys more uniformly.
  .It's also helpful if the array that you're putting values into has a prime length.
*/
function hash(key, arrayLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[1];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrayLen;
  }
  return total;
}
console.log(hash('pink', 10));
