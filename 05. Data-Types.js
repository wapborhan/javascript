document.write("<h3>Data Types_Numbers</h3>");

var xj = 25.25458;
var jd = xj.toPrecision(3);

document.write(xj);
document.write("<br>");
document.write(jd);

document.write("<h3>Data Types_Strings</h3>");
var x = "Hello \n \t \t World";
var y = " Borhan Uddin     ";
var dz = "Borhan Uddin".length;
var a = y.length;
document.write("Hello World");
document.write("<br>");
document.write("Hello World");
document.write("<br>");
document.write('Hello "this World');
document.write("<br>");
document.write("Hello \\ world");
document.write("<br>");
document.write("Hello \t \t \t world");
document.write("<br>");
console.log(x);
document.write(y + " 'Lenth = ' " + y.length);
document.write("<br>");
document.write("Borhan Uddin 'Lenth = '" + a);
document.write("<br>");
document.write(y[0] + y[1] + y[2] + y[3] + y[4] + y[5] + y[6]);
document.write("<br>");
document.write(y.toUpperCase());
document.write("<br>");
document.write(y.toLowerCase());
document.write("<br>");
document.write(y.trim());
document.write("<br>");
document.write(y.slice(0, 7) + " + " + y.slice(-10, -1));
document.write("<br>");
document.write(y.substr(1, 7));
document.write("<br>");
document.write(y.replace("Uddin", "Biswas"));
document.write("<br>");
document.write(x.concat(y, "How Are You?"));

document.write("<h3>Data Types_Booleans</h3>");

var d = 9 > 12;
var e = 9 > 5;

document.write(d);
document.write("<br>");
document.write(e);

document.write("<h3>Data Types_Arrays</h3>");

var color = ["Red", "Blue", "Green"];
// changes variable
var colorc = (color[3] = "Lime");
// add variable
var colorAdd = (color[color.length] = "Pink");
// add variable last
var colorPus = color.push("White");
// remove last variable
var colorPO = color.pop();
// remove 1st variable
var colorShi = color.shift();
//add 1st variable
var colorShif = color.unshift("Red");

var colors = "Black and White";
var colorSpl = colors.split("");
var colorSplt = colors.split(" ");
var colorstr = colorSplt.toString();
var colorjon = colorSplt.join(" ");

document.write(color.sort());
document.write("<br>");
document.write(color[0]);
document.write("<br>");
document.write("Lenth = " + color.length);
document.write("<br>");
document.write(colorc);
document.write("<br>");
document.write(colorSpl);
document.write("<br>");
document.write(colorSplt);
document.write("<br>");
document.write(colorstr);
document.write("<br>");
document.write(colorjon);

document.write("<h3>Data Types_Objects</h3>");
var student = {
  Name: "Rahim",
  Age: "25",
  City: "Bangladesh",
};
var name = student["Name"];
var age = student["Age"];
var adds = (student["Roll"] = 12);
var dlt = delete student.Age;

document.write(name + " " + age);
console.log(student);

document.write("<h3>Data Types_More on Arrays and Objects</h3>");

var arr = [
  1,
  2,
  ["a", "b", ["Z", "Y", "x"], "c"],
  3,
  4,
  { Name: "Borhan", Age: 25 },
  5,
];

var obj = { Test: "Test", Test2: "Test2", Test3: ["Test3-1", "Test3-2"] };

console.log(arr);
document.write(arr + " / " + arr[2][0] + " / " + arr[2][2][1]);
console.log(arr[5]["Name"]);

console.log(obj);
document.write("<br>");
document.write(obj.Test3[0] + " " + obj.Test3[1]);
