console.log("Hello World");
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log(" file created");
  fs.rename("welcome.txt", "hello.txt", (err) => {
    if (err) throw err;
    console.log("Rename complete!");
    fs.readFile("./hello.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});

const http = require("http");
http
  .createServer((req, res) => {
    res.end("<h1> Hello Node!!!!</h1>");
  })
  .listen(3000, () => console.log("server created"));
