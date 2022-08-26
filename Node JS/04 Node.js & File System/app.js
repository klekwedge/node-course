const fs = require("fs");

// fs.readFile("./test.txt", (error, data) => {
//   // console.log(data.toString());
//   console.log(data.toString());
// });

fs.readFile("./test.txt", "utf-8", (error, data) => {
  // console.log(data.toString());
  // console.log(data);

  fs.mkdir("./files", () => {
    fs.writeFile("./files/test2.txt", `${data}\nHello!`, (error) => {
      error ? console.log(error) : null;
    });
  });
});

// fs.readFile("./test.txt", "utf-8", (error, data) => {
//   // console.log(data.toString());
//   // console.log(data);

//   fs.mkdirSync(".files", () => {});

//   fs.writeFileSync(".files/test2.txt", `${data}\nHello!`, (error) => {
//     error ? console.log(error) : null;
//   });
// });

console.log("Just test!");

setTimeout(() => {
  if (fs.existsSync("./files/test2.txt")) {
    fs.unlink("./files/test2.txt", () => {});
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync("./files")) {
    fs.rmdir("./files", () => {});
  }
}, 6000);
