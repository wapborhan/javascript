var input = parseInt(prompt("Enter The Number of Terms!"));
var sum = 0;
var series = "";

for (var i = 1; i <= input; i++) {
    sum += i * i;
    series += (i ** 2).toString();
    //Break series loop
    if (i == input) {
        continue;
    }
    // Add plus every series
    series += " + ";

}

document.write(` ${series} = ${sum} `);



