const Log = (req, res, next) => {
  console.log({
    METHOD: req.method,
    ENDPOINT: req.originalUrl,
    HEADER: req.headers,
    BODY: req.body,
  });
  next();
};

module.exports = Log;
