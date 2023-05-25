import express, { Express, Request, Response, Router } from 'express';
const dotenv = require('dotenv');

import bodyParser from 'body-parser'
import cors from "cors";
import Log from './app/middleware/log';
import VisitorRoute from './app/routes/visitor';
import notFound from './app/middleware/notfound';
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
require('./config/db')

app.use(
  cors({
    credentials: true,
    methods: ['OPTIONS','GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: (origin: any, callback: Function) => {
      if (!origin) return callback(null, true);
      if (process.env.WEB_HOST?.split(",").indexOf(origin) === -1) {
        let msg: string = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    optionsSuccessStatus: 200,
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

app.use("/visitor/", VisitorRoute)
app.use(notFound);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
