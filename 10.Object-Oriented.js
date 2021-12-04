document.write("<h3>Funtion_Object Method</h3>");

//Object Method
let person = {
  firstName: "Borhan",
  lastName: "Uddin",
  dob: "08-07-1996",

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

document.write(person.firstName + "<br>");
document.write(person.fullName());

document.write("<h2>Funtion_Math Objects </h2>");
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

document.write("<h2>Funtion_Date Objects</h2>");
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
  "<h2>Funtion_Global and Local Scope with let and const (ES6)</h2>"
); //var same variable many time and reassign
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
var a = 1;
let b = 2;
const c = 3;
document.write(` Global Scope: ${a} ${b} ${c}<br>`);

//Local Scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  document.write(` Global Scope: ${a} ${b} ${c} <br>`);
}
test();

document.write(` Global Scope: ${a} ${b} ${c}<br>`);
