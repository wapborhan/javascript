//Callback Function
let persons = [
  { fristName: "Borhan", lastName: "Uddin" },
  { fristName: "Rabby", lastName: "Biswas" },
];

function createPerson(person, getperson) {
  setTimeout(function () {
    persons.push(person);
    getperson();
  }, 2000);
}

function getPerson() {
  setTimeout(function () {
    let output = "";
    persons.forEach(function (person) {
      output += `<li>${person.fristName} ${person.lastName}</li>`;
    });
    document.getElementById("output").innerHTML = output;
  }, 500);
}

createPerson({ fristName: "Rony", lastName: "Ali" }, getPerson);

//02. JavaScript Promises
