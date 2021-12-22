// Regular Expression

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

console.log(reresultse);
