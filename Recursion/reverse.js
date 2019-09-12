// Write a recursive function that takes a string and returns the reverse of that string.

function reverse(str) {
  if (str === '') {
    return '';
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}
