//ES6 fat arrow Function

//Normal Function
// function number() {
//   return 10;
// }

//Arrow Function
let number = (a, b) => {
  a + b;
};
console.log(number(10, 15));


var javascript = {
  name: "javascript",
  libraries: ["react", "angular", "vue"],
  printlibr = function () {
    this.libraries.forEach((a) => {
      console.log(`${this.name} loves ${a}`);
    });
  }
};

javascript.printlibr();