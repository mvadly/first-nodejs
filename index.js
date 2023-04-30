const express = require("express");
const visitorRoute = require("./app/routes/visitor");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use("/visitor", visitorRoute);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
