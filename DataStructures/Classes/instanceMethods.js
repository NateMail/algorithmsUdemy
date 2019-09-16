/*
    Methods in the class can be called on the individual instances that are created by the class. 
*/

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student('Colt', 'Steele', 3);

// Returns the students full name
firstStudent.markLate();
firstStudent.markLate();
firstStudent.addScore(88);
firstStudent.addScore(92);
firstStudent.addScore(50);
console.log(firstStudent.calculateAverage());
