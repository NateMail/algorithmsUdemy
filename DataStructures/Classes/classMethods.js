/*
    Allows us to create methods that can be used on the class itself and not the instances of the class. 

    Utility methods 
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
  static EnrollStudents() {
    return 'ENROLLING STUDENTS';
  }
}

let firstStudent = new Student('Colt', 'Steele', 2);
let secondStudent = new Student('Blue', 'Steele', 3);

console.log(Student.EnrollStudents([firstStudent, secondStudent]));

// Distance can be used for the class regardless of the instances.
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
