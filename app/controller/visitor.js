const validator = require("../helper/validation");
const visitorRepository = require("../repository/visitor");
const visitorService = require("../services/visitor");
const util = require("../helper/util");

const visitorController = {
  getAll: (req, res) => {
    visitorService.getAllVisitor(req, res);
  },

  create: (req, res) => {
    visitorService.createVisitor(req, res);
  },
};

module.exports = visitorController;
