const fs = require("fs");
const path = require("path");

const generateRoutesContent = function(name) {
  return `const controllers = require("./controllers");
const ${name}Route = require("express").Router();
/*
 write your code here..
 ex: ${name}Route.get("/count",controllers.count)
*/

module.exports = ${name}Route;





/*
Hint! don't forget to register the ${name}Route in the main app "index.js" as a middleware.

>>>>> index.js >>>>>
example:
const ${name}Route = require('./${name}/routes');
const app = require('express')();
app.use('/${name}',${name}Route);
*/
`;
};

const generateControllersContent = function() {
  return `
  /*
  write your code here like below simple example: 
  const count = function(req,res){return res.status(200).send({total:100})};
  module.exports.count = count;
  */
  `;
};
const generateBusinessLogicContent = function() {
  return `
//  write your business logic here to be called by the controller: 
  `;
};

function createapp() {
  if (!process.argv[2]) {
    throw new Error(
      "Insufficient number of arguments! Expected application name but Null is received !"
    );
  }
  let appName = process.argv[2].trim().toLowerCase();
  const strtWithNumRgx = /^[0-9]/;
  if (appName.match(strtWithNumRgx) != null) {
    throw new Error(
      "Invalid application name! application name can't start with number."
    );
  }
  const specialCharRgx = /\W/g;
  if (appName.match(specialCharRgx) != null) {
    throw new Error(
      "Invalid application name! application name can't contain any special character."
    );
  }
  const appDirectory = path.join(__dirname, appName);
  if (fs.existsSync(appDirectory)) {
    throw new Error("application with given name already exist!");
  } else {
    fs.mkdirSync(appDirectory);
    fs.writeFileSync(
      `${appDirectory}/controllers.js`,
      generateControllersContent()
    );
    fs.writeFileSync(
      `${appDirectory}/models.js`,
      "// write the related db model here if exist."
    );
    fs.writeFileSync(
      `${appDirectory}/routes.js`,
      generateRoutesContent(appName)
    );
    fs.writeFileSync(
      `${appDirectory}/${appName}.js`,
      generateBusinessLogicContent()
    );
    fs.writeFileSync(
      `${appDirectory}/tests.js`,
      "// write the related test here if any."
    );
    console.log(`application ${appName} is created successfully`);
  }
}

createapp();
