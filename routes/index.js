const myController = require("../controllers");
const routes = require("express").Router();

// My solution to retrieving data, but with a different kind of lazy:
// Send different requests to different routes based on what data is needed
// Instead of just sending it all.

routes.get("/logs", myController.logs);
routes.get("/login", myController.login);
module.exports = routes;