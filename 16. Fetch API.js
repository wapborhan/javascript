// //Callback Function
// let persons = [
//   { fristName: "Borhan", lastName: "Uddin" },
//   { fristName: "Rabby", lastName: "Biswas" },
// ];

// function createPerson(person, getperson) {
//   setTimeout(function () {
//     persons.push(person);
//     getperson();
//   }, 2000);
// }

// function getPerson() {
//   setTimeout(function () {
//     let output = "";
//     persons.forEach(function (person) {
//       output += `<li>${person.fristName} ${person.lastName}</li>`;
//     });
//     document.getElementById("output").innerHTML = output;
//   }, 500);
// }

// createPerson({ fristName: "Rony", lastName: "Ali" }, getPerson);

//02. JavaScript Promises

// function createPerson(person) {
//   let prom = new Promise(function (resolve, reject) {
//     persons.push(person);
//     let error = false;

//     if (!error) {
//       resolve();
//     } else {
//       reject("Error: Something Wrong!");
//     }
//   });
//   return prom;
// }

// function getPerson() {
//   setTimeout(function () {
//     let output = "";
//     persons.forEach(function (person) {
//       output += `<li>${person.fristName} ${person.lastName}</li>`;
//     });
//     document.getElementById("output").innerHTML = output;
//   }, 500);
// }

// createPerson({ fristName: "Rony", lastName: "Ali" })
//   .then(getPerson)
//   .catch(function (err) {
//     document.write(err);
//   });

//03. Fetch API

document.getElementById("getfetch_data").addEventListener("click", fetchData);

function fetchData() {
  // fetch("http://api.icndb.com/jokes/random/")
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  //use arrow function

  fetch("http://api.icndb.com/jokes/random/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
