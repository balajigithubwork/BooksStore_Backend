const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/books");
    console.log("DB Connected");
  } catch (error) {
    console.log(error.mongoose);
  }
};

module.exports = dbConnection;
