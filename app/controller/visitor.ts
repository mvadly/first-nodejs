const visitorService = require("../services/visitor");
import { Request, Response } from "express";
const visitorController = {
  getAll: (req: Request, res: Response) => {
    visitorService.getAllVisitor(req, res);
  },

  create: (req: Request, res: Response) => {
    visitorService.createVisitor(req, res);
  },

  
};

module.exports = visitorController;
