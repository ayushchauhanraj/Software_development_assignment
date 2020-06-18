const express = require("express");
const route = express.Router();
const cartClass = require("../db/modules/cart");
const cartHelper = require("../db/helpers/cartHelper");

//cart add item
route.post("/:userid/operation", async (req, res) => {
  let userId = req.params.userid;

  let { product } = req.body;
  let c = await cartHelper.getCartByuserId(userId, res);
  let oldCart = new cartClass(c || { userId });

  if (!c) {
    console.log("inside the c");
    await cartHelper.createCart(oldCart.generate(), function (err, resultCart) {
      if (err) return next(err);

      if (!product) return res.send({ cart: resultCart });
    });
  }
  if (product) {
    console.log(oldCart.update(product));
    oldCart = oldCart.generate();
    cartHelper.cartUpdate(oldCart, res);
  }
});
route.post("/:userid", async (req, res) => {
  const userId = req.params.userid;
  try {
    let c = await cartHelper.getCartByuserId(userId, res);
    res.send(c);
  } catch (error) {
    res.send(error);
  }
});

module.exports = route;
