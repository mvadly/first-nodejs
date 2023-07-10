import moment from "moment-timezone";
import fs from "fs";

const getDateTime = () => {
  return moment().tz("Asia/Jakarta").format();
};
const getSize = (folderPath: string,) => {
  let size = 0
  fs.stat(folderPath, (err, stats) => {
    console.log("in:",folderPath, stats.size);
    if (err) {
      return err.message
    }
    size =(stats.size / 1024)
  })

  return size
}
const util: Object = {
  getDateTime,
  getSize
};


module.exports = util;
