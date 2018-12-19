var express = require("express");

function setup(app, handlers) {
// ########## Example Routes ##########
  var examplesRouter = express.Router();  
  examplesRouter.get("/", handlers.examples.getList);
  app.use("/api/examples", examplesRouter);

// ########## More Routes ##########

};

exports.setup = setup;