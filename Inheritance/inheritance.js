'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor (firstName, lastName, id, scores) {
         super(firstName, lastName, id);
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
   calculate () {
        let sum = 0;
        if (
            this.firstName.length >= 1 &&
            this.lastName.length <= 10 &&
            this.idNumber.toString().length === 7 &&
            this.scores.every(score => score >= 0 && score <= 100)
        ) {
            for (let i = 0; i< this.scores.length; i++) {
            sum += this.scores[i];
        }
        let a = sum / this.scores.length;
       return (90 <= a && a <= 100) ? 'O' :
                   (80 <= a && a < 90) ? 'E' :
                   (70 <= a && a < 80) ? 'A' :
                   (55 <= a && a < 70) ? 'P' :
                   (40 <= a && a < 55) ? 'D' : 'T';
        };       
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
