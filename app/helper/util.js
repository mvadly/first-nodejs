const moment = require("moment");

const getDateTime = () => {
  return moment().format("YYYY-MM-DD HH:mm:ss ZZ");
};
const util = {
  getDateTime,
};

module.exports = util;
