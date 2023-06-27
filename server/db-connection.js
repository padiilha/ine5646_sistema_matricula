const mongoose = require("mongoose");

require("dotenv").config();

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}

module.exports = connect();
