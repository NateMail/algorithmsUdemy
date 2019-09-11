// Write a function which takes a string and returns counts of each character in the string.

charCount('aaaa'); // {a: 4}
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}

// Should we have an object and incriment each letter if it is there or only each letter that is there?

charCount('my phone number is 182763'); // Should the numbers or special characters be returned?
charCount('Hello hi'); // Should we care about casing?

charCount(); // What do we want to return?
charCount(null); // What should we do if the input is invalid?

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in a string; values should be the counts of those characters
}

function charCount(str) {
  // make object to return at end
  let result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // if the char is a number/letter AND not in object, add it and set value to 1
      result[char] = 1;
    }
  }
  // if the character is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}

function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// Refactored answer
function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alphabet (A-Z)
    !(code > 96 && code < 123) // lower alphabet (a-z)
  ) {
    return false;
  }
  return true;
}
