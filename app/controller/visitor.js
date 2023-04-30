const visitorService = require("../services/visitor");

const visitorController = {
  getAll: (req, res) => {
    visitorService.getAllVisitor(req, res);
  },

  create: (req, res) => {
    visitorService.createVisitor(req, res);
  },
};

module.exports = visitorController;
