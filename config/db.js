const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log("Connected");
  } catch (error) {
    console.error(error);
    process.exit(1); //exit process
  }
};

module.exports = connectDB;
