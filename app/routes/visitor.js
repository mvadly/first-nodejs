const express = require("express");
const visitorController = require("../controller/visitor");
const visitorRoute = express.Router();

visitorRoute.get("/all", visitorController.getAll);
visitorRoute.post("/create",  visitorController.create);
// visitorRoute.put("/update/:id", visitorController.update);
// visitorRoute.delete("/update/:id", visitorController.delete);

module.exports = visitorRoute;
