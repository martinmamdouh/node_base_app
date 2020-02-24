"use strict";
module.exports = function addRequestIdToResHeader(req, res, next) {
  if (!req.id) throw new Error("id property does not exist in req object !");
  else {
    res.header["x-request-id"] = req.id;
    next();
  }
};
