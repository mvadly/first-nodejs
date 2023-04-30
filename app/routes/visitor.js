const express = require("express");
const VisitorController = require("../controller/visitor");
const visitorRoute = express.Router()

visitorRoute.get('/all', VisitorController.getAll)
visitorRoute.post('/create', VisitorController.create)
visitorRoute.put('/update/:id', VisitorController.update)
visitorRoute.delete('/update/:id', VisitorController.delete)

module.exports = visitorRoute