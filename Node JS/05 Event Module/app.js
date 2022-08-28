const Logger = require("./log");
const logger = new Logger();

logger.on("some_event", (args) => {
  const { id, text } = args;
  console.log(id, text);
});

// emmiter.emit("some_event", "Event test text");
// emmiter.emit("some_event", { id: 1, text: "Event test text" });
logger.log("User logged!");
