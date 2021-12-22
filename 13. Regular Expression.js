// Regular Expression

let rel;

rel = /hello/; //case sensitive
rel = /hello/i; //case insensitive

document.write(rel);
document.write("<br>");
document.write(rel.source);

restr = "Hello World";

let result = rel.exec(restr);

console.log(result);
