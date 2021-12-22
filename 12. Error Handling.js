document.write("Before Error!");
document.write("<br>");

try {
  test();
} catch (err) {
  // document.write(err);
  document.write(`Type: ${err.name} "${err.message}"`);
} finally {
  document.write("<br>" + "I am inside Filany!");
}
document.write("<br>");
document.write("After Error!");
