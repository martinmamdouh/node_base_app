const controllers = require("./controllers");
const userRoute = require("express").Router();

userRoute.get("", controllers.getAll);
userRoute.get("/:id", controllers.getUserById);

module.exports = userRoute;
