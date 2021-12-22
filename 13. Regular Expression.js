// //01. Regular Expression Intruduce

// let rel;

// rel = /hello/; //case sensitive
// rel = /hello/i; //case insensitive

// document.write(rel);
// document.write("<br>");
// document.write(rel.source);

// restr = "Hello World";
// restr = "Again Hello World";
// restr = "AgainHello World";
// restr = "Again Hello World Hello";

// //exec() Returns result in an array or null
// let reresult = rel.exec(restr);
// //test() - True/False
// let reresultt = rel.test(restr);
// //match() Returns Array or Null
// let reresultm = restr.match(rel);
// //search() Returns index of the first match or -1
// let reresultse = restr.search(rel);
// //replace() - Replace Return new string
// let reresultr = restr.replace(rel, "Hi");

// document.write("<br>" + reresult);
// document.write("<br>" + reresultt);
// document.write("<br>" + reresultm);
// document.write("<br>" + reresultse);
// document.write("<br>" + reresultr);

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

restr = "Hllo";

document.write(rel.exec(restr));
document.write("<br>");

function reTest(rel, restr) {
  if (rel.test(restr)) {
    document.write(`'${restr}' - Matches : '${rel.source}'`);
  } else {
    document.write(`'${restr}' - Doesn't Matches : '${rel.source}'`);
  }
}
reTest(rel, restr);
