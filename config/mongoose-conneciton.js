const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/bagify")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

module.exports = mongoose.connection;
