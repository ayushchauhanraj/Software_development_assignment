const mongoose = require("mongoose");

// Connection URL
const url =
  "mongodb+srv://<>-w5fpy.mongodb.net/test?retryWrites=true&w=majority";

// Use connect method to connect to the Server
const connectDB = async () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(console.log("mongodb connected"))
    .catch();
};

module.exports = connectDB;
