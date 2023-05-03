import moment from "moment-timezone";

const getDateTime = () => {
  return moment().tz("Asia/Jakarta").format();
};
const util: Object = {
  getDateTime,
};

module.exports = util;
