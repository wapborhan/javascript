// Asynchronous Programming
// AJAX = Asynchronous Javascript and XML
// Get Data without loading the page
document.getElementById("get_data").addEventListener("click", loadData);

function loadData() {
  // create XHR Object (Xml Http Request)
  let ajxh = new XMLHttpRequest();

  // open function
  ajxh.open("GET", "data.txt", true);

  //HTTP Status
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  ajxh.onload = function () {
    if (this.statu === 200) {
    }
  };
  console.log(ajxh);
}
