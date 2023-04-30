const notFound = (req, res, next) => {
  res.status(404).json({
    status: false,
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
};
module.exports = notFound;
