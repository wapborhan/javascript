// // Explore Dom

// let omval;
// omval = this;
// omval = window;
// omval = window.document;
// omval = document;
// omval = document.all;
// omval = document.all[11];
// omval = document.head;
// omval = document.body;
// omval = document.doctype;
// omval = document.domain;
// omval = document.URL;
// omval = document.characterSet;
// omval = document.contentType;

// omval = document.forms;
// omval = document.forms[1];
// omval = document.forms[1].method;
// omval = document.forms[1].action;

// omval = document.links;
// omval = document.links[1];
// omval = document.links[1].href;
// omval = document.links[1].className;
// omval = document.links[1].classList;

// omval = document.images;

// omval = document.scripts;
// omval = document.scripts[0];
// omval = document.scripts[0].src;
// omval = document.scripts[0].getAttribute("src");

// //DOM array
// let links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function (link) {
//   console.log(link);
// });
// console.log(links);

// DOM Selector (single);

// 01. document.getElementById();

// let omvals;
// //getting Element
// omvals = document.getElementById("tittle");
// omvals = document.getElementById("tittle").className;
// //Changing Style
// document.getElementById("tittle").style.background = "#b72727";
// document.getElementById("tittle").style.color = "#fff";
// document.getElementById("tittle").style.padding = "15px";

// //changing content
// document.getElementById("tittle").textContent = "New Tittle";
// document.getElementById("tittle").innerText = "New Tittle 2";
// document.getElementById("tittle").innerHTML = "<b>New Bold Text</b>";

// let omvald = document.getElementById("tittle");
// omvald.innerHTML = "Short New Tittle";

// console.log(omvals);

// 02. document.querySelector()

let omvalr;

omvalr = document.querySelector("#tittle");
omvalr = document.querySelector(".tittle_class");

omvalr = document.querySelector("ol");
omvalr = document.querySelector("ol li");
omvalr = document.querySelector("ul li:last-child").style.background = "red";
omvalr = document.querySelector("ul li:nth-child(2)").style.background =
  "green";

console.log(omvalr);
