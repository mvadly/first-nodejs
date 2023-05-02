const moment = require("moment-timezone");
const getDateTime = () => {
  return moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss ZZ");
};

const util = {
  getDateTime,
};

module.exports = util;
