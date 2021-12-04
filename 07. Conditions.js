document.write("<h3>If Statement </h3>");
if (true) {
  document.write("If Execute");
} else {
  document.write("Else Execute");
}

document.write("<br>");

if (false) {
  document.write("If Execute");
} else {
  document.write("Else Execute");
}

document.write("<br>");

if (false) {
  document.write("If Execute");
} else if (true) {
  document.write("Else IF Execute");
} else {
  document.write("Else Execute");
}

document.write("<h3> Nested If Condition </h3>");

var n1 = prompt("Frist Number:");
var n2 = prompt("Second Number:");
var n3 = prompt("Third Number:");

document.write(`Your inputs Number 
        ${"<br>"}
         Frist No. ${n1} ${"<br>"}
         Second No. ${n2} ${"<br>"}
         Third No. ${n3}`);
document.write("<br> <br>");
if (n1 >= n2 && n1 >= n3) {
  document.write(n1 + " This is largest Number");
} else if (n2 >= n1 && n2 >= n3) {
  document.write(n2 + " This is largest Number");
} else {
  document.write(n3 + " This is largest Number");
}

document.write("<br> <br>");

if (n1 >= n2) {
  if (n1 >= n3) {
    document.write(n1 + " This is largest Number");
  } else {
    document.write(n3 + " This is largest Number");
  }
} else {
  if (n2 >= n3) {
    document.write(n2 + " This is largest Number");
  } else {
    document.write(n3 + " This is largest Number");
  }
}

document.write("<h3>Switch </h3>");

document.write("Select an Option");
document.write("<br>");
document.write("a. Option 1");
document.write("<br>");
document.write("2. Option 2");
document.write("<br>");
document.write("c. Option 3");

choice = prompt("Type Your Choice Option");
var text;

// If Else

if (choice == "a") {
  text = "You Have Selected Option 1";
} else if (choice == "b") {
  text = "You Have Selected Option 2";
} else if (choice == "c") {
  text = "You Have Selected Option 3";
} else {
  text = "You Have No Selected";
}

//Switch

switch (choice) {
  case "a":
    text = "Option 1 Selected";
    break;
  case "b":
    text = "Option 2 Selected";
    break;
  case "c":
    text = "Option 3 Selected";
    break;
  case "a":
    text = "Option Not Selected";
    break;
}

document.write("<br>");
document.write("<br>");
document.write(text);
