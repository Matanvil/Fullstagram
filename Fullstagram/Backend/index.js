require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require('./models/index.js');

const app = express();
app.use(express.json());
app.use(cors());
require('./routes/users.js')(app);

connectToDb().then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("app is running");
  });
});
