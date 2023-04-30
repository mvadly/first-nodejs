const util = require("../helper/util");
const validator = require("../helper/validation");
const visitorRepository = require("../repository/visitor");
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

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      return res.status(400).send({
        success: false,
        message: "Validation failed",
        errors: err,
      });
    }
  }).catch((err) => {
    return res.status(500).send({
      success: false,
      message: "Internal server error: " + err.message,
    });
  });

  const request = {
    id: btoa(new Date().getTime().toString()),
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
