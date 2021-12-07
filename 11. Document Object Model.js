document.write("<h3>Explore Dom</h3>");

let omval;
omval = this;
omval = window;
omval = window.document;
omval = document;
omval = document.all;
omval = document.all[11];
omval = document.head;
omval = document.body;
omval = document.doctype;
omval = document.domain;
omval = document.URL;
omval = document.characterSet;
omval = document.contentType;

omval = document.forms;
omval = document.forms[1];
omval = document.forms[1].method;
omval = document.forms[1].action;

omval = document.links;
omval = document.links[1];
omval = document.links[1].href;
omval = document.links[1].className;
omval = document.links[1].classList;

omval = document.images;

omval = document.scripts;
omval = document.scripts[0];
omval = document.scripts[0].src;
omval = document.scripts[0].getAttribute("src");

//DOM array
let links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function (link) {
  console.log(link);
});
console.log(links);
