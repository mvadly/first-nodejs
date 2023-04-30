const validator = require("../helper/validation");
const serviceVisitor = async (req) => {
  const validationRule = {
    name: "required|string|email",
    message: "required|string",
    lat: "float",
    lng: "float",
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Validation failed",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

module.exports = serviceVisitor;
