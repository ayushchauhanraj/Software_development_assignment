import React from "react";
class Operation {
  constructor(nu1, nu2, radix) {
    this.nu1 = parseInt(nu1, parseInt(radix));
    this.nu2 = parseInt(nu2, parseInt(radix));
    this.radix = parseInt(radix);
    console.log("constructor", this.nu1, this.nu2, this.radix);
  }
  add() {
    let decimal = this.nu1 + this.nu2;
    let sum = decimal.toString(this.radix);
    return { decimal, sum };
  }
  sub() {
    let decimal = this.nu1 - this.nu2;
    let sum = decimal.toString(this.radix);
    return { decimal, sum };
  }
  mul() {
    let decimal = this.nu1 * this.nu2;
    let sum = decimal.toString(this.radix);
    return { decimal, sum };
  }
  div() {
    let decimal = this.nu1 / this.nu2;
    let sum = decimal.toString(this.radix);
    return { decimal, sum };
  }
}
export default Operation;
