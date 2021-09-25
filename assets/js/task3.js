// var namer = prompt("\n \n Enter your Name:"); 
var fristinp = prompt("\n \n Enter Frist Number");
var secondinp = prompt("\n \n Enter Second Number");
var subjt = prompt("\n 1. Add(+)\n 2. Subtract(-) \n 3. Multiply(*) \n 4. Divide(/) \n\nChoose an Oparetion ");

fristinp = parseInt(fristinp);
secondinp = parseInt(secondinp);
subjt = parseInt(subjt);

//Choose Oparation Show
if (subjt == 1) {
    document.getElementById("sub").innerHTML = "Add";
    document.getElementById("result").innerHTML = fristinp + secondinp;
    document.getElementById("inpt").innerHTML = fristinp + "+" + secondinp;
} else if (subjt == 2) {
    document.getElementById("sub").innerHTML = "Subtract";
    document.getElementById("result").innerHTML = fristinp - secondinp;
    document.getElementById("inpt").innerHTML = fristinp + "-" + secondinp;
} else if (subjt == 3) {
    document.getElementById("sub").innerHTML = "Multiply";
    document.getElementById("result").innerHTML = fristinp * secondinp;
    document.getElementById("inpt").innerHTML = fristinp + "*" + secondinp;
} else if (subjt == 4) {
    document.getElementById("sub").innerHTML = "Divide";
    document.getElementById("result").innerHTML = fristinp / secondinp;
    document.getElementById("inpt").innerHTML = fristinp + "/" + secondinp;
} else {
    document.getElementById("sub").innerHTML = "Invalid Choose";
    document.getElementById("result").innerHTML = "Invalid Result";
    document.getElementById("inpt").innerHTML = "Invalid Input";
}

// Automatic Calculate
if (subjt <= 4) {
    document.getElementById("readd").innerHTML = fristinp + secondinp;
    document.getElementById("resubtract").innerHTML = fristinp - secondinp;
    document.getElementById("remultiply").innerHTML = fristinp * secondinp;
    document.getElementById("divide").innerHTML = fristinp / secondinp;
} else {
    document.getElementById("readd").innerHTML = "Invalid Choose";
    document.getElementById("resubtract").innerHTML = "Invalid Choose";
    document.getElementById("remultiply").innerHTML = "Invalid Choose";
    document.getElementById("divide").innerHTML = "Invalid Choose";
}
