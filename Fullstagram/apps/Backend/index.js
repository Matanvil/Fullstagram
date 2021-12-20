require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const connectToDb = require("./models");
const userRouter = require("./routes/user")
const postRouter = require("./routes/post")

const port = process.env.PORT || 4000


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(userRouter);
app.use(postRouter);

// require("./routes")(app);

connectToDb().then(() => {
  app.listen(port, () => {
    console.log("app is running on port " + port);
  });
});
