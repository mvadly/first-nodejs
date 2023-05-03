import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser'
import cors from "cors";
import Log from './app/middleware/log';
import mongoose, { ConnectOptions, Mongoose } from 'mongoose';
const app: Express = express();
const visitorRoute: Router = require("./app/routes/visitor")
const notFound: Router = require("./app/middleware/notfound")
dotenv.config();

const port = process.env.PORT;
app.use(
  cors({
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

mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then((e:any) => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "First API Express Using TypeScript" });
});

app.get("/info", (req: Request, res: Response) => {
  res.send("App Name: API Express using JSONDB <br> Version: 1.0")
});

app.use("/visitor", visitorRoute);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
