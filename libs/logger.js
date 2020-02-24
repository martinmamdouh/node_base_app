"use strict";

const Pino = require("pino"),
  PackageInfo = require("../package");

const Logger = Pino({
  name: PackageInfo.name,
  level: "debug",
  timestamp: () => {
    return `,"time":"${new Date().toISOString()}"`;
  }
}).child({
  appVersion: PackageInfo.version,
  nodeVersion: process.version.slice(1)
});

module.exports = Logger;
