"use strict";
// config
const config = require("config");
// secure headers
const helmet = require("helmet");
// express as a rest framework
const express = require("express");
// generate unique request id and add it into req.id
const generateRequestId = require("express-request-id")();
// get request id from each req and add into header of the response
const returnRequestId = require("./middlewares/dt-add-request-id-to-res-header");
// access and error logs
const dtMorgan = require("./middlewares/dt-morgan");
// import Pino logger
const logger = require("./libs/logger");
// import routers
const userRoute = require("./users/routes");

// Define app
const app = express();

// add middlewares
app.use(express.json());
app.use(helmet());
app.use(generateRequestId);
app.use(returnRequestId);
app.use(dtMorgan.morganErrorLogger);
app.use(dtMorgan.morganAccessLogger);

// debugging >> will print out each request's body, headers, url, protocol, method, and query params.
if (config.get("debug")) {
  const dtDebugger = require("./middlewares/dt-debugging");
  app.use(dtDebugger);
}
// register your apps here
// URLS
app.use("/users", userRoute);

app.listen(`${config.get("server.port")}`, () => {
  logger.debug(
    `The application is up and running in ${
      process.env.NODE_ENV
    } mode.. listening to port ${config.get("server.port")}`
  );
});
