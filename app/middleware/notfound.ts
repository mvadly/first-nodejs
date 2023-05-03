const notFound = (req: any, res: any) => {
  res.status(404).json({
    status: false,
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
};
module.exports = notFound;
