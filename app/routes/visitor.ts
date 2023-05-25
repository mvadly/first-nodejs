import express from "express";
import { visitorController } from "../controller/visitor";
const VisitorRoute = express.Router();

VisitorRoute.get("/all", visitorController.getAll);
VisitorRoute.post("/create", visitorController.create);
// VisitorRoute.put("/update/:id", visitorController.update);
// VisitorRoute.delete("/update/:id", visitorController.delete);

export default VisitorRoute;
