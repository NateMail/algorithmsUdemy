function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen);

// ["Colt", "Steele", "Algorithms", "Data Structures"]
