import { NextFunction, Request, Response } from "express";
const util = require("../helper/util")
const Log = (req: Request, res: Response, next: NextFunction) => {
  console.log({
    TIME: util.getDateTime(),
    METHOD: req.method,
    ENDPOINT: req.originalUrl,
    HEADER: req.headers,
    BODY: {
      params: req.params,
      json: req.body,
      query: req.query,
    },
  });
  next();
};

export default Log;
