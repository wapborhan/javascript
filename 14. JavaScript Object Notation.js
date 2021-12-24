// // 02. JSON Syntax
// let student = {
//   jsonName: "Rahim",
//   jsonAge: 26,
//   jsonhometown: "dhaka",
// };
// //javascript to json convert
// let student_json = JSON.stringify(student);

// document.write(student_json);
// //json to javascript convert
// let student_new = JSON.parse(student_json);

// console.log(student_new);

// // 03. JSON Data Types
// //string
// //number
// //object
// //array
// //boolean
// //null

// let jsonperson = {
//   name: "Borhan", //string
//   age: 25, //number
//   hometown: "Kushtia",
//   married: false, //boolean
//   dob: "1996-07-08", //date
//   test_null: null, //null
//   test_undefined: undefined, //undefined
//   greet: function () {
//     console.log(`Hello ${name}`);
//   }, // function
// };
// let jsonpersonc = JSON.stringify(jsonperson);
// console.log(jsonpersonc);

// // 04. Warning!
//frist use this
// let jsonpersonc = JSON.stringify(jsonperson);

//05. JSON Objects and Array
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var data = xhttp.responseText;
    // console.log(data);
    jsonData(data);
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();

function jsonData(json_obj) {
  // console.log(json_obj);
  var js_obj = JSON.parse(json_obj);
  // console.log(js_obj);

  for (x in js_obj.persons) {
    // console.log(x);
    var jspersons = js_obj.persons;
    // console.log(jspersons[x]);

    for (y in jspersons[x]) {
      console.log(`${y} : ${jspersons[x][y]}`);
    }
  }
}
