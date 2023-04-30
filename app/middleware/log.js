const Log = (req, res, next) => {
  console.log({
    METHOD: req.method,
    ENDPOINT: req.originalUrl,
    HEADER: req.headers,
  });
  next();
};

module.exports = Log