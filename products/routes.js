const controllers = require("./controllers");
const productsRoute = require("express").Router();
/*
 write your code here..
 ex: productsRoute.get("/count",controllers.count)
*/

module.exports = productsRoute;





/*
Hint! don't forget to register the productsRoute in the main app "index.js" as a middleware.

>>>>> index.js >>>>>
example:
const productsRoute = require('./products/routes');
const app = require('express')();
app.use('/products',productsRoute);
*/
