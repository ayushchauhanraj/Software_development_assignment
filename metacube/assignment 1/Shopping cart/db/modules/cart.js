let cartSchema = require("../models/cartSchema");
class Cart {
  constructor(oldCart) {
    this.userId = oldCart.userId || "";
    this.totalQty = oldCart.totalQty || 0;
    this.items = oldCart.items || {};
    this.totalPrice = oldCart.totalPrice || 0;
  }
  //add and upadate of user cart
  update(product) {
    let storedItem = this.items[product.id];
    if (!storedItem) {
      storedItem = { qty: 0, price: 0 };
    }
    let differnce = 0;
    if (storedItem.qty >= product.qty) {
      differnce = storedItem.qty - product.qty;
      this.totalPrice -= product.price * differnce;
    } else {
      differnce = product.qty - storedItem.qty;
      this.totalPrice += product.price * differnce;
    }
    storedItem.qty = product.qty;
    storedItem.price = product.price;

    this.items[product.id] = storedItem;
    this.totalQty += differnce;

    if (storedItem.qty <= 0) {
      delete this.items[product.id];
    }

    return this;
  }
  delete(productid) {
    if (this.items[productid]) {
      delete this.items[productid];
    }
  }
  generate() {
    let newCart = new cartSchema({
      userId: this.userId,
      totalQty: this.totalQty,
      items: this.items,
      totalPrice: this.totalPrice,
    });
    console.log("generated model",newCart);
    return newCart;
  }
}
module.exports = Cart;
