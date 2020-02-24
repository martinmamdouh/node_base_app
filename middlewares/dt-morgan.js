//logging in rotating file stream mode
const morgan = require("morgan");
const fs = require("fs");
const rfs = require("rotating-file-stream");
const path = require("path");

// create a write stream (in append mode)
const dir = __dirname.split(path.sep);
dir.splice(-1, 1);
const dirname = dir.join("/");
const logDirectory = path.join(dirname, "log");
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create a rotating write stream
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: logDirectory
});
const errorLogStream = rfs.createStream("errors.log", {
  interval: "1d", // rotate daily
  path: logDirectory
});
var loggerFormat =
  ':id :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

morgan.token("id", function getId(req) {
  return req.id;
});

const morganAccessLogger = morgan(loggerFormat, {
  stream: accessLogStream
});
const morganErrorLogger = morgan(loggerFormat, {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
  stream: errorLogStream
});

exports.morganAccessLogger = morganAccessLogger;
exports.morganErrorLogger = morganErrorLogger;
