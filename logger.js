const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "./logs/all.log" }),
  ],
});

module.exports = logger;

/*

level:
  - error
  - warn
  - info (we choose this and beyond level will be logged)
  - debug

format:
  combined json and timestamp feature

transports:
  - Console() print at console
  - File"() write to the file
*/