let cartSchema = require("../models/cartSchema");
let cartHelper = {
  getCartByuserId: (userId, res) => {
    return cartSchema.findOne({ userId: userId });
  },
  createCart: (newcart, callback) => {
    newcart.save(callback);
  },
  cartUpdate: (newcart, res) => {
    cartSchema.updateOne(
      { userId: newcart.userId },
      {
        items: newcart.items,
        totalQty: newcart.totalQty,
        totalPrice: newcart.totalPrice,
      },
      function (err, doc) {
        if (err) {
          res.send(err);
        } else {
          res.send(doc);
        }
      }
    );
  },
};

module.exports = cartHelper;
