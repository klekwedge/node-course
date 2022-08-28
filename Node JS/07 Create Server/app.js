const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);

  // res.setHeader("Content-Type", "text/plain");
  // res.write("<p>Hello world!");
  // res.end();

  // res.setHeader("Content-Type", "text/html");

  // res.write("<head><link rel='stylesheet' href='#'></head>");

  // res.write("<h1>Hello world!</h1>");
  // res.write("<p>My name is Alex</p>");
  // res.end();

  res.setHeader("Content-Type", "application/json");

  const data = JSON.stringify([
    { name: "Alex", age: 35 },
    { name: "Nick", age: 35 },
  ]);

  res.end(data);
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
