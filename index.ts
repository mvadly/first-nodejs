import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser'
import cors from "cors";
import Log from './app/middleware/log';
const visitorRoute: Router = require("./app/routes/visitor")
const app: Express = express();
dotenv.config();

const port = process.env.PORT;
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Log);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "First API Express Using TypeScript" });
});

app.get("/info", (req: Request, res: Response) => {
  res.send("App Name: API Express using JSONDB <br> Version: 1.0")
});

app.use("/visitor", visitorRoute);
// app.use(notFound);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
