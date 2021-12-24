// // Asynchronous Programming
// // AJAX = Asynchronous Javascript and XML
// // Get Data without loading the page
// document.getElementById("get_data").addEventListener("click", loadData);

// function loadData() {
//   // create XHR Object (Xml Http Request)
//   let ajxh = new XMLHttpRequest();

//   // open function
//   ajxh.open("GET", "data.txt", true);

//   ajxh.onprogress = function () {
//     console.log(ajxh.readyState);
//   };

//   //HTTP Status
//   // 200: "OK"
//   // 403: "Forbidden"
//   // 404: "Not Found"

//   ajxh.onload = function () {
//     if (this.status === 200) {
//       document.getElementById(
//         "ajoutput"
//       ).innerHTML = `<h4>${this.responseText}</h4>`;
//     }
//   };

//   //Old Style
//   // ajxh.onreadystatechange = function () {
//   //   if (this.status === 200 && this.readyState === 4) {
//   //     document.getElementById(
//   //       "ajoutput"
//   //     ).innerHTML = `<h4>${this.responseText}</h4>`;
//   //   }
//   // };

//   ajxh.send();
// }

//02. Data From External Server
// API
document.getElementById("get_jokes").addEventListener("click", loadData);

function loadData() {
  // create XHR Object (Xml Http Request)
  let ajxh = new XMLHttpRequest();

  // open function
  ajxh.open("GET", "http://api.icndb.com/jokes/random", true);

  ajxh.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      let joke = data.value;
      // console.log(`${joke.id} : ${joke.joke} `);
      console.log(joke);

      // document.getElementById("jokes").innerHTML = `<h4>${jokesdata}</h4>`;
    }
  };

  ajxh.send();
}
