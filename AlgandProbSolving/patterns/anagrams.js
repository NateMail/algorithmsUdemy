/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') true
validAnagram('aaz', 'zza') false
validAnagram('anagram', 'nagaram') true
validAnagram('rat', 'car') false
validAnagram('awesome', 'awesom') false
validAnagram('qwerty', 'qeywrt') true
validAnagram('texttwisttime', 'timetwisttext') true
*/

// My attempt
function validAnagram(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  for (let v of str1) {
    frequency1[v] = (frequency1[v] || 0) + 1;
  }

  for (let v of str2) {
    frequency2[v] = (frequency2[v] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }
  return true;
}

// There answer
function validAnagramTeacherSolution(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagramTeacherSolution('anagram', 'nagaram'));
