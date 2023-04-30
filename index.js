const express = require("express");
const visitorRoute = require("./app/routes/visitor");
const app = express();
const cors = require("cors");
const notFound = require("./app/middleware/notfound");
const Log = require("./app/middleware/log");
require("dotenv").config();
const port = process.env.PORT;
// app.use(cors);cors
app.use(Log);
app.get("/", (req, res) => {
  res.json({ message: "First API Express" });
});

app.get("/info", (req, res) =>
  res.send("App Name: API Express using JSONDB <br> Version: 1.0")
);
app.use("/visitor", visitorRoute);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
