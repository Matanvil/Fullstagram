const { connect } = require("mongoose");

async function connectToDb() {
  connection = await connect('mongodb://localhost/Fullstagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to MongoDB");
}

module.exports = connectToDb;
