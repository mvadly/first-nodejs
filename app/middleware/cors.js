const cors = require("cors");
const Cors = () => {
  var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  return cors(corsOptions)
};

module.exports = Cors
