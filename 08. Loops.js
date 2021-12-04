document.write("<h3>While Loop</h3>");
var i = 1;
// Loop
while (i <= 5) {
  document.write("Hello World");
  document.write("<br>");

  i++;
}

//loop
var a = 1;

while (a <= 10) {
  document.write(a + " ");
  a++;
}
document.write("<br>");

//loop
var lb = 1;

while (lb <= 5) {
  if (lb === 1) {
    document.write("Borhan");
  }
  if (lb == 2) {
    document.write("hello dear");
    console.log("hello dear");
  }

  console.log(lb);
  document.write(lb + "<br>");

  lb++;
}

//Lop Jog kora
var c = 1;
var sum = 0;
var product = "1";

while (c <= 10) {
  sum = sum + c;
  product = product * c;
  c++;
}
document.write("Result: " + sum + "<br>");
document.write("Result: " + product);

document.write("<h3>For Loop</h3>");

//for loop
for (let c = 1; c <= 5; c++) {
  document.write(c + "<br>");
}

for (let d = 4; d >= 1; d--) {
  document.write(d + "<br>");
}

document.write("<h3>Break & Continue</h3>");
//Break
//Out of code
for (var e = 1; e <= 5; e++) {
  if (e == 3) {
    break;
  }
  document.write(e + "<br>");
}
document.write("<br>");
document.write("<br>");
document.write("<br>");

//Continue
//Moment Skip
for (var f = 20; f <= 25; f++) {
  if (f == 23) {
    continue;
  }
  document.write(f + "<br>");
}

document.write("<br>");

for (var g = 30; g <= 40; g++) {
  if (g % 2 == 1) {
    continue;
  }
  document.write(g + "<br>");
}

document.write("<br>");

for (var h = 30; h <= 40; h++) {
  if (h % 2 == 0) {
    continue;
  }
  document.write(h + "<br>");
}

document.write("<h3>String and Array_Loop</h3>");

//Strings
let name = "Borhan Uddin";
let food = ["Cake", "Chokolate", "Ice Cream"];
let len = name.length;
let lenf = food.length;

for (var h = 0; h < len; h++) {
  // document.write(name[h]);
  document.write(name[h]);
}
document.write("<br>");

for (var g = 0; g < lenf; g++) {
  // document.write(name[h]);
  document.write(food[g] + "<br>");
}

document.write("<h3>Loop_For-IN/For-OF</h3>");
let names = "Iam a learning Javascript";
let foods = ["Cake", "Chokolate", "Ice-cream"];
let person = {
  name: "Borhan Uddin",
  profession: "WebDEsigner",
  team: "codestrickz",
  age: 25,
};

//in for index
for (var x in names) {
  document.write(x + " ");
}
document.write("<br>");

for (var x in names) {
  document.write(`Index: ${x} Iteam: ${names[x]} <br>`);
}

// of for iteam/value
for (var x of names) {
  document.write(x + " ");
}

document.write("<br>");

//
for (var y in foods) {
  document.write(`index: ${y} iteam: ${foods[y]} <br>`);
}

//
for (var lz of foods) {
  document.write(lz + " ");
}

document.write("<br>");

//
for (var lb in person) {
  //document.write(b + "<br>");
  document.write(`Property: ${b} 
            value: ${person[lb]}<br>`);
}

// for (var lz of person) {
//   document.write(lz + " ");
// }
