const express = require("express");
const bodyParser = require("body-parser");
const visitorRoute = require("./app/routes/visitor");
const cors = require("cors");
const app = express();
const notFound = require("./app/middleware/notfound");
const Log = require("./app/middleware/log");
const Cors = require("./app/middleware/cors");
require("dotenv").config();
const port = 3000;
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Log);

app.get("/", (req, res) => {
  res.json({ message: "First API Express" });
});

app.get("/info", (req, res) =>
  res.send("App Name: API Express using JSONDB <br> Version: 1.0")
);
// app.use("/visitor", visitorRoute);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server running at PORT: ${port}`);
});
