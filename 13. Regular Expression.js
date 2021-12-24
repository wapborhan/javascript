//01. Regular Expression Intruduce

let rel;

rel = /hello/; //case sensitive
rel = /hello/i; //case insensitive

document.write(rel);
document.write("<br>");
document.write(rel.source);

restr = "Hello World";
restr = "Again Hello World";
restr = "AgainHello World";
restr = "Again Hello World Hello";

//exec() Returns result in an array or null
let reresult = rel.exec(restr);
//test() - True/False
let reresultt = rel.test(restr);
//match() Returns Array or Null
let reresultm = restr.match(rel);
//search() Returns index of the first match or -1
let reresultse = restr.search(rel);
//replace() - Replace Return new string
let reresultr = restr.replace(rel, "Hi");

document.write("<br>" + reresult);
document.write("<br>" + reresultt);
document.write("<br>" + reresultm);
document.write("<br>" + reresultse);
document.write("<br>" + reresultr);

// 02. Literal and Meta Characters
//Literal Characters
rel = /hello/; //case sensitive
rel = /hello/i; //case insensitive

// Meta Characters
rel = /^hello/i; //^ Must Start With
rel = /hello$/i; //$ Must End With
rel = /^hello$/i; //$ Must Start and End With
rel = /h.llo/i; //. Match Any One Characters
rel = /h*llo/i; // * 0 to More Characters or No Characters
rel = /he?llo/i; //? Optional
// // 03. Character Set using Brackets
rel = /h[ea]llo/i; //[] Must be one of them inside brackets
rel = /h[^ea]llo/i; //[^] Anything except inside brackets
rel = /^[he]llo/i; //^[] Must start with anyone inside brackets
rel = /[a-z]llo/i; //[a-z] range anyone inside brackets
rel = /^[A-Z]/; //^[A-Z] Frist Letter Must Be Uppercase
rel = /[A-Za-z]/; //[A-Za-z] anything in letter
rel = /[0-9]ello/; //[0-9] Start in digit
rel = /[0-9][0-9]ello/; //[0-9] Start in Two digit
rel = /[0-9][0-9][0-9]ello/; //[0-9] Start in Three digit

//braces {} - Quantifier
rel = /hel{2}o/; // brackets after letter count 2 check
rel = /hel{2,5}o/; // brackets after letter count 2-5 check
rel = /hel{2,}o/; // brackets after letter count 2-unlimited check

//parentheses () - Grouping
rel = /^([0-9]){5}/; // 5 digit start must

//bangladeshi phone number
rel = /^01([0-9]){9}$/;
rel = /^\+8801([0-9]){9}$/;

restr = "+8801620557840";

document.write(rel.exec(restr));
document.write("<br>");

// 04. Shorthand Characters and Assertions
// Shorthand Characters Classes
rel = /\w/; //word Character - alphabet number or _
rel = /\w+/; //word Character one or more
rel = /\W/; //Non word Character
rel = /\W+/; //Non word Character one or more
rel = /\d/; //Digit Character
rel = /\d+/; //Digit Character one or more
rel = /\D+/; //Non Digit Character one or more
rel = /\s/; //Match for Spaces
rel = /\S/; //Match for Non Spaces
rel = /Hello\b/; //word boundry

//Assertions
rel = /x(?=yx)/; // matches x only x is before yz
rel = /x(?!yx)/; // not matches x only x is before yz

restr = "hellodjsbfjkbss";

function reTest(rel, restr) {
  if (rel.test(restr)) {
    document.write(`'${restr}' - Matches : '${rel.source}'`);
  } else {
    document.write(`'${restr}' - Doesn't Matches : '${rel.source}'`);
  }
}
reTest(rel, restr);
