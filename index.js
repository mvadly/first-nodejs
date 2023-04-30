const express = require("express");
const visitorRoute = require("./app/routes/visitor");
const app = express();
const cors = require("cors");
const notFound = require("./app/middleware/notfound");
require("dotenv").config();
const port = process.env.PORT;
// app.use(cors);cors

app.get("/", (req, res) => {
  res.json({ message: "First API Express" });
});
app.use("/visitor", visitorRoute);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
