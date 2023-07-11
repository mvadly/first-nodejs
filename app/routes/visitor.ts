import express from "express";
import { visitorController } from "../controller/visitor";
const VisitorRoute = express.Router();

VisitorRoute.get("/all", visitorController.getAll);
VisitorRoute.post("/create", visitorController.create);
VisitorRoute.delete("/delete", visitorController.delete);

export default VisitorRoute;
