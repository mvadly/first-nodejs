import express from "express";
import * as ctrl from "../controller/guest";
const GuestRoute = express.Router();

GuestRoute.get("/stories", ctrl.getAllStories);

export default GuestRoute;
