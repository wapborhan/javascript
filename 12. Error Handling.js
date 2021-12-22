// document.write("Before Error!");
// document.write("<br>");

// try {
//   test();
// } catch (err) {
//   // document.write(err);
//   document.write(`Type: ${err.name} "${err.message}"`);
// } finally {
//   document.write("<br>" + "I am inside Filany!");
// }
// document.write("<br>");
// document.write("After Error!");

let eb = 24;

try {
  if (eb > 15) throw "Too Big";
  else if (eb < 5) throw "Too Small";
} catch (err) {
  console.log(err);
}
