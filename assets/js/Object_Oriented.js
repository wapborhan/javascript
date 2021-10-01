// Normal Way

let parson = {
    firstName: "Borhan",
    lastName: "Uddin",
    dob: "08-07-1996",

    fullName: function () {
        document.write(`${this.firstName} ${this.lastName}`);

    }
}

let parson2 = {
    firstName: "Rabby",
    lastName: "Biswas",
    dob: "22-07-1995",

    fullName: function () {
        document.write(`${this.firstName} ${this.lastName}`);

    }
}

// console.log(parson);
// console.log(parson2);


// Class is a template for creating object

// Make Class

class Person {
    //Funtion
    constructor(fname, lname, birthday) {
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthday;
    }



    fullName() {
        console.log(this.firstName, this.lastName);
    }

    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

let person1 = new Person("Borhan", "Uddin", "01-01-1990");
let person2 = new Person("Rabby", "Biswas", "01-01-1991");
let person3 = new Person("Rony", "Khan", "01-01-1993");
let person4 = new Person("Fazle", "Hossain", "01-01-1994");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());
console.log(person4.calculateAge());

console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());
console.log(person4.fullName());