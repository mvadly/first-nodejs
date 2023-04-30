const util = require("../helper/util");
const visitorRepository = require("../repository/visitor");
const Validator = require("validatorjs");
const getAllVisitor = (res) => {
  visitorRepository.getAllVisitor(res);
};
const createVisitor = (req, res) => {
  const validationRule = {
    name: "required|string",
    message: "required|string",
    lat: "string",
    lng: "string",
  };

  const validation = new Validator(req.body, validationRule);

  if (validation.fails()) {
    return res.status(400).send({
      success: false,
      message: "Validation failed",
      data: validation.errors.all(),
    });
  }

  const request = {
    name: req.body.name,
    lat: req.body?.lat ?? null,
    lng: req.body?.lng ?? null,
    message: req.body.message,
    createdAt: util.getDateTime(),
  };

  visitorRepository.createVisitor(request, res);
};
const visitorService = {
  getAllVisitor,
  createVisitor,
};

module.exports = visitorService;
