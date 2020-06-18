import React, { Component } from "react";
import Show from "./show";
import Operation from "./class";

class App extends Component {
  state = {
    nu1: 0,
    nu2: 0,
    result: {},
  };
  addInput = async (obj) => {
    console.log(obj);

    let classObj = new Operation(obj.nu1, obj.nu2, obj.type);
    let sol = await classObj[obj.oper]();

    this.setState({
      nu1: obj.nu1,
      nu2: obj.nu2,
      result: sol,
    });
    console.log(this.state);
  };
  render() {
    let { nu1, nu2, result } = this.state;
    return (
      <div>
        <h1>Calc:</h1>
        <Show addInput={this.addInput} result={result} />
      </div>
    );
  }
}

export default App;
