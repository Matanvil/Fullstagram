require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const connectToDb = require("./models");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
require("./routes")(app);

connectToDb().then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("app is running");
  });
});
