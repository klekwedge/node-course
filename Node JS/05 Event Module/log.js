const EventEmmiter = require("events");
// const util = require("util");

class Logger extends EventEmmiter {
  log = (msg) => {
    console.log(msg);
    this.emit("some_event", { id: 1, text: "Event test text" });
  };
}

// class Logger {
//   log = (msg) => {
//     console.log(msg);
//     this.emit("some_event", { id: 1, text: "Event test text" });
//   };
// }
// util.inherits(Logger, EventEmmiter);

// const log = (msg) => {
//   console.log(msg);
//   emmiter.emit("some_event", { id: 1, text: "Event test text" });
// };

module.exports = Logger;
