// document.write("<h3>Class</h3>");
// document.write("Check Console Log");

// class OOperson {
//   constructor(fname, lname, birthday) {
//     this.fristname = fname;
//     this.lasttname = lname;
//     this.dob = birthday;
//   }

//   calculateAge() {
//     let birthday = new Date(this.dob);
//     let diff = Date.now() - birthday.getTime();
//     let ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   fullname() {
//     console.log(this.fristname, this.lasttname);
//   }
// }

// let ooperson1 = new OOperson("Borhan", "Uddin", "08/07/1996");
// let ooperson2 = new OOperson("Rabby", "Biswas", "08/07/1996");
// let ooperson3 = new OOperson("Zihad", "Biswas", "08/07/1996");

// console.log(ooperson1);
// console.log(ooperson1.fullname());
// console.log(ooperson1.calculateAge());
// console.log(ooperson2);
// console.log(ooperson3);

// Sub Class
// document.write("<h3>Sub Class</h3>");
// document.write("Check Console Log");
// //Base Cluss
// class OOperson2 {
//   constructor(fname, lname) {
//     this.fristname = fname;
//     this.lasttname = lname;
//   }

//   grettings() {
//     console.log(`Hello ${this.fristname} ${this.lasttname}`);
//   }
// }

// let opersono1 = new OOperson2("Mr", "Uddin");
// console.log(opersono1);
// console.log(opersono1.grettings());

// // Sub Class
// class Customer extends OOperson2 {
//   constructor(fname, lname, phone, membership) {
//     super(fname, lname);

//     this.phone = phone;
//     this.memberShip = membership;
//   }
// }

// let opersono2 = new Customer("Md", "Biswas", "01620557840", "Premium");
// console.log(opersono2);
// console.log(opersono2.grettings());

// Static Function
document.write("<h3>Static Function</h3>");
document.write("Check Console Log");

class OOperson3 {
  constructor(fname, lname) {
    this.fristname = fname;
    this.lasttname = lname;
  }

  grettings() {
    console.log(`Hello  ${this.fristname} ${this.lasttname}`);
  }

  static test() {
    console.log("I am Static!");
  }
}
