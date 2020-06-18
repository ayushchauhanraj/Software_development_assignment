const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connection");
const app = express();
mongodb();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
console.log("here");
app.use(express.static("public"));
app.use("/cart", require("./routes/cartRoute"));
app.use(function (req, res, next) {
  res.send("No such page");
});
app.listen(3000, () => {
  console.log("Server is started...");
});
