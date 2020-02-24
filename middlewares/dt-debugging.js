"use strict";

const Pino = require("pino"),
  PackageInfo = require("../package");

const Logger = Pino({
  prettyPrint: true,
  name: PackageInfo.name,
  level: "debug",
  timestamp: () => {
    return `,"time":"${new Date().toISOString()}"`;
  }
});

const requestLoggerMiddleware = function(req, res, next) {
  console.log(req);
  try {
    const child = Logger.child({
      request_path: req.url,
      request_id: req.id ? req.id : null,
      request_body: req.body,
      request_headers: req.headers,
      request_protocol: req.protocol,
      request_method: req.method,
      request_path_parameters: req.params,
      request_query_parameters: req.query
    });
    child.info(
      "from dt-debugging middleware..to turn off debugging middleware set debug = false in config/development.json"
    );
  } catch (err) {
    Logger.fatal("cant log request due to an error => " + err.message);
  }

  next();
};
module.exports = requestLoggerMiddleware;
