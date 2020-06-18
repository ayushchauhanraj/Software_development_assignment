const mongoose = require("mongoose");

const cart = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  totalQty: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  items: {
    type: Object,
  },
});

let cartSchema = mongoose.model("CartSchema", cart);
module.exports = cartSchema;
