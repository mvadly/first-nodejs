const util = require("../helper/util");

const Log = (req, res, next) => {
  console.log({
    TIME: util.getDateTime(),
    METHOD: req.method,
    ENDPOINT: req.originalUrl,
    HEADER: req.headers,
    BODY: {
      params: req.params,
      json: req.body,
      query: req.query,
    },
  });
  next();
};

module.exports = Log;
