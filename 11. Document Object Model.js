// // 02 Explore Dom

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

// //  DOM array
// let links = document.links;
// let linkArr = Array.from(links);

// linkArr.forEach(function (link) {
//   console.log(link);
// });
// console.log(links);

// // 03 DOM Selector (single);

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

// let omvalr;

// omvalr = document.querySelector("#tittle");
// omvalr = document.querySelector(".tittle_class");

// omvalr = document.querySelector("ol");
// omvalr = document.querySelector("ol li");
// omvalr = document.querySelector("ul li:last-child").style.background = "red";
// omvalr = document.querySelector("ul li:nth-child(2)").style.background =
//   "green";

// console.log(omvalr);

// //04 DOM MultiSelector
// document.getElementsByClassName()

// let omlist = document.getElementsByClassName("mselect");

// omlist[0].style.background = "red";
// omlist[0].style.color = "#888";
// omlist[0].textContent = "Hello World";

// console.log(omlist[0]);

// document.getElementsByTagName()
// omlists = document.getElementsByTagName("li");

// omlists = document.querySelector("ul").getElementsByTagName("li");

// let lisArr = Array.from(omlists);
// lisArr.forEach(function (item) {
//   console.log(item);
// });

// console.log(omlists);

// document.querySelectorAll()
// omsel = document.querySelectorAll(".mselect");
// omsel = document.querySelectorAll("li");

// omsel.forEach(function (item) {
//   console.log(item);
// });

// let liOdd = document.querySelectorAll("li:nth-child(odd)");
// let liEvn = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(function (item) {
//   item.style.background = "red";
//   item.style.color = "#fff";
//   item.style.padding = "10px";
//   item.style.margin = "0";
// });
// liEvn.forEach(function (item) {
//   item.style.background = "green";
//   item.style.color = "#fff";
//   item.style.padding = "10px";
//   item.style.margin = "0";
// });

// console.log(omsel);

// // 05 Traversing The Dom
// let domval;
// let omlist = document.querySelector("ol");
// let omlistItem = document.querySelector("ol li");

// domval = omlist;
// domval = omlistItem;

// //Get Child Nodes
// domval = omlist;
// domval = omlist.childNodes;
// domval = omlist.childNodes[0];
// domval = omlist.childNodes[1];
// domval = omlist.childNodes[1].nodeName;
// domval = omlist.childNodes[1].nodeType;
// domval = omlist.childNodes[0].nodeType;
// // 1 Element
// // 2 Attribute
// // 3 Text Node
// // 8 Comment
// // 9 Document Itself
// // 10 Doctype

// domval = omlist.children;
// domval = omlist.children[2];
// domval = omlist.children[2].children[0];
// domval = omlist.children[2].children[0].href;

// domval = omlist.firstElementChild;
// domval = omlist.lastElementChild;
// domval = omlist.childElementCount;

// domval = omlistItem.parentElement;
// domval = omlistItem.parentNode;
// domval = omlistItem.parentNode.parentElement;

// domval = omlistItem.nextSibling.nextSibling;
// domval = omlistItem.nextElementSibling.nextElementSibling;
// domval = omlistItem.previousSibling.previousSibling;
// domval = omlistItem.previousElementSibling;

// console.log(domval);

// // 06 Add, Replace and Remove Elements

// // Adding Elemement To Dom
// //Create Element

// let DMolItem = document.createElement("li");

// //Add Class and ID
// DMolItem.className = "new class name";
// DMolItem.id = "new id";

// // Add attribute
// DMolItem.setAttribute("Tittle", "New Tittle Add");

// // Add Element Text
// DMolItem.appendChild(document.createTextNode("Hello 3"));
// document.querySelector("ul").appendChild(DMolItem);

// //Link Add
// let DoMolItem = document.createElement("li");
// let DoMLink = document.createElement("a");

// // Add attribute
// DoMLink.appendChild(document.createTextNode("Hello 5"));
// DoMLink.setAttribute("href", "http://www.wapborhan.com");

// // Creating Element Add To Main List
// DoMolItem.appendChild(DoMLink);
// document.querySelector("ol").appendChild(DoMolItem);

// // Replace Element
// let newHeading = document.createElement("h1");
// newHeading.appendChild(document.createTextNode("Some Links"));

// // add class
// newHeading.id = "tittle";
// newHeading.className = "tittle_class mselect";
// newHeading.style.background = "black";
// newHeading.style.display = "inline-block";
// newHeading.style.padding = "10px 20px";
// newHeading.style.margin = "10px 0";

// let oldHeading = document.querySelector("h3");
// let dmparent = document.querySelector(".bod");

// //replace Element to main elements
// dmparent.replaceChild(newHeading, oldHeading);

// //Remove Elements
// let dmlostItem = document.querySelectorAll("li");
// let dmlist = document.querySelector("ol");

// //remove
// // dmlostItem[0].remove();
// // dmlostItem[3].remove();

// //add class
// dmlist.classList.add("test");
// dmlist.classList.add("new-test");

// //remove class
// dmlist.classList.remove("mselect");

// //check attribute
// let ckattrb = dmlist.hasAttribute("class");
// dmlist.setAttribute("Tittle", "new tittle");
// dmlist.removeAttribute("Tittle");

// console.log(dmlist);
// console.log(ckattrb);

// //07. JavaScript DOM Events
// // Onclick Event

// function domalert() {
//   alert("Hello World Function");
// }

// //Event Listener
// let btn = document
//   .getElementById("dmbtn")
//   .addEventListener("mouseover", domalert);

// let dmbtns = document
//   .querySelector(".bod")
//   .addEventListener("mouseover", domevent);

// document.querySelector(".bod").style.background = "red";

// function domevent(dme) {
//   let dmval = dme;
//   //target element
//   dmval = dme.target;
//   //target element id
//   dmval = dme.target.id;
//   //target element click time(after page load)
//   dmval = dme.target.timeStamp;
//   //event type
//   dmval = dme.target.type;

//   dmval = dme.clientY;
//   dmval = dme.clientX;

//   dmval = dme.offsetY;
//   dmval = dme.offsetX;
//   dmbtns = this;
//   this.style.background = `#${dme.offsetX}`;
//   console.log(dmbtns);
// }

// //Form
// document.querySelector("#name").addEventListener("focus", domform);
// document.querySelector("#name").addEventListener("keyup", domform2);

// function domform(de) {
//   this.style.background = "pink";
// }
// function domform2(des) {
//   document.getElementById("formms").innerText = this.value;
// }
