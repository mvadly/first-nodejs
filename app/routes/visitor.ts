import express from "express";
import { visitorController } from "../controller/visitor";
const VisitorRoute = express.Router();

VisitorRoute.get("/all", visitorController.getAll);
VisitorRoute.post("/create", visitorController.create);

export default VisitorRoute;
