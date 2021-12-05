document.write("<h3>Funtion_Declare</h3>");
// <button style="padding: 10px; margin-right: 20px;" onclick="say2()">Click</button>
//Funtion Declare
function say() {
  document.write("Hello ");
  document.write("Borhan ");
  document.write("Uddin");
}

function say2() {
  alert("\nHello Borhan Uddin.\n\n Your Funtion Is Working");
}

//Funtion Execute
say();

document.write("<h3>Funtion_Parameter</h3>");

//Funtion Declare
function say3(param, param1, param2 = "Biswas") {
  document.write(`Hello ${param} ${param1} ${param2}`);
}

//Funtion Execute
var fname = "MD";
var lname = "Borhan";

say3(fname, lname);

document.write("<br>");

//
function addNum(a = 0, b = 0) {
  document.write(`${a} + ${b} =`);
  return a + b;
  document.write("If return dont excute");
}

document.write(addNum(4, 10));

document.write("<br>");

var res = addNum(5, 25);

document.write(res);

document.write("<h3>Funtion_Expression and Arrow Function</h3>");

document.write("<h3>Funtion_Object Method</h3>");
//Object Method
let personf = {
  firstName: "Borhan",
  lastName: "Uddin",
  dob: "08-07-1996",

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

document.write(personf.firstName + "<br>");
document.write(personf.fullName());

document.write("<h3>Funtion_Math Objects </h3>");
//Math Object
let val;
let valpi = Math.PI;
let vale = Math.E;
let valround = Math.round(3.9);
let valup = Math.ceil(1.9);
let valdown = Math.floor(1.9);
let valsqr = Math.sqrt(81);
let valabs = Math.abs(-8);
let valpow = Math.pow(2, 3);
let valmin = Math.min(5, 6, 9, 7, 0, 3);
let valmax = Math.max(5, 6, 9, 7, 0, 3);
let valran = Math.random() * 6 + 1;
let valranflt = Math.floor(Math.random() * 6 + 1);

document.write(`Pai: ${valpi} <br>
        E: ${vale}<br>
        Round (3.9) : ${valround}<br> 
        Up Value (1.9) : ${valup}<br>
        Down Value(1.9) : ${valdown}<br>
        Squaret Root(81) : ${valsqr}<br>
        Absulate (-8) : ${valabs}<br>
        Power (2*3) : ${valpow}<br>
        Minimum Value (5, 6, 9, 7, 0, 3) : ${valmin}<br>
        Max Value (5, 6, 9, 7, 0, 3) : ${valmax}<br>
        Random Number (0-6) : ${valran}<br>
        Random Number Float (0-6) : ${valranflt}<br>
        `);

document.write("<h3>Funtion_Date Objects</h3>");

//Date Object
let date;

let today = new Date();
let birtDate = new Date("07-08-1996 11:25:59");
let month = today.getMonth() + 1;
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "sep",
  "Oct",
  "Dec",
];
let day = today.getDay();
//Time Stamp > Amount of seconds past since  1st Jan 1970
let time = today.getTime();

let setDate = new Date("07-08-1996 11:25:59");
let setmont = setDate.setMonth(06);
let setdate = setDate.setDate(22);
let setyear = setDate.setFullYear(1996);

document.write(`
        Today: ${today}<br>
        Birth Date: ${birtDate}<br>
        Month: ${month}<br>
        Month: ${months[month]}<br>
        Day: ${day}<br>
        Time: ${time}<br><br>
        Set Date ('07-08-1996 11:25:59'): <br>${setDate}<br>
        
        `);

document.write(
  "<h3>Funtion_Global and Local Scope with let and const (ES6)</h3>"
);

//var same variable many time and reassign
// var a = 10;
// var a = a + 10;
// document.write(a);

//let same variable one time and  reassign
// let b = 5;
// //Warning
// let b = b + 10;
// document.write(b);

//const same variable one time and no reassign
// const c = 18;
// //waening
// c = c + 10;
// document.write(c);

//Global Scope
var fa = 1;
let fb = 2;
const fc = 3;
document.write(` Global Scope: ${fa} ${fb} ${fc}<br>`);

//Local Scope
function test() {
  var fa = 4;
  let fb = 5;
  const fc = 6;
  document.write(` Global Scope: ${fa} ${fb} ${fc} <br>`);
}
test();

document.write(` Global Scope: ${fa} ${fb} ${fc}<br>`);
