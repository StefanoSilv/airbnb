// Packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`);
});

module.exports = app;
