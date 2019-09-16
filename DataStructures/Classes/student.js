/*
    Classes are like blue prints 
    The method to create new objects MUST be called constructor.
    
    The class keyword creates a constant, so you can not redefine it. Watch out for the Syntax as well!
*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

// Creates two new instances of students
let firstStudent = new Student('Colt', 'Steele', 3);
let secondStudent = new Student('Blue', 'Steele', 6);

console.log(firstStudent, secondStudent);
