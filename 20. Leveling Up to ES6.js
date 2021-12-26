// ES6 fat arrow Function

// Normal Function
function number() {
  return 10;
}

// Arrow Function
let number = (a, b) => {
  a + b;
};
console.log(number(10, 15));

//Ternary Oparetor
var age = 18;
//short form
var type = age >= 18 ? "Adult" : age < 10 ? "Child" : "young";
// logn Form

if (age >= 18) {
  type = "adult";
} else if (age <= 10) {
  ("Child");
} else {
  type = "Young";
}

console.log(type);

//array.prototype.find()
