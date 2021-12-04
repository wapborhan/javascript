document.write("<h3>Arithmetic Oparetor</h3>");
var k = 20;
var l = 10;
document.write(k + l);
document.write("<br>");

document.write(k - l);
document.write("<br>");

document.write(k * l);
document.write("<br>");

document.write(k / l);
document.write("<br>");

document.write(k % l);
document.write("<br>");
// ** Power Math
document.write(2 ** 4);
document.write("<br>");

document.write("<h3>Arithmetic Oparetor</h3>");
var m = 20;
var n = m++;
var q = ++m;

document.write(m);

document.write("<br>");

var p = 20;
var o = p--;
document.write(p);

document.write("<h3> String Oparetor </h3>");

var line1 = " Borhan";
var line2 = " Age: ";
var line3 = 36;
var line4 = 14;

document.write(line1 + " " + line2 + line3 + line4);

document.write("<br>");

document.write(line3 + line4 + line2);

document.write("<h3>Comparison Oparetor</h3>");
var ad = 4 == 4;
var bd = 4 == 6;

document.write("4 == 4" + " " + ad);

document.write("<br>");

document.write("4 == 6" + " " + bd);

document.write("<br>");

var ar = 4 == "4";
var as = 4 === "4";
document.write("4 == '4' " + " " + ar);

document.write("<br>");

document.write("4 === '4' " + " " + as);

document.write("<br>");

var al = 4 != 5;
document.write("4 != 5 " + " " + al);

document.write("<br>");

var ap = 4 !== "4";
document.write("4 !== '4' " + " " + ap);

document.write("<br>");

var aa = 4 > 5;
var aaa = 5 < 10;
document.write("4 > 5" + " " + aa);

document.write("<br>");

document.write("5 > 10" + " " + aaa);

document.write("<h3>Logical Oparetor</h3>");
document.write(aa || aaa);

document.write("<br>");

document.write(aa && aaa);

document.write("<h3>Condition</h3>");
// If True Then 1st word
var ams = 1 < 8 ? "Hello" : "world";
//If False Thens 2nd word
var amt = 8 < 1 ? "Hello" : "world";
document.write(ams);

document.write("<br>");

document.write(amt);

document.write("<h3>Assignment Oparetor</h3>");

var als = 10;
var kml = als + 10;
document.write(kml);
