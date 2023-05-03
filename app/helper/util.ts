import moment from "moment-timezone";

const getDateTime = () => {
  return moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss ZZ");
};
const util: Object = {
  getDateTime,
};

module.exports = util;
