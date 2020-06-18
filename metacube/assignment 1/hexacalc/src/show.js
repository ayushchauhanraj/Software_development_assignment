import React, { Component } from "react";

class Show extends Component {
  state = {
    type: "10",
    oper: "add",
    nu1: "0",
    nu2: "0",
  };

  handleChange = (e) => {
    let key = e.target.id;
    this.state[key] = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("onsubmit", this.state);
    this.props.addInput(this.state);
  };

  render() {
    return (
      <div>
        <h3>
          No validate So Enter number in range according to input choose ...
        </h3>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <label>Choose type of numbers</label>
          <select
            className="browser-default"
            id="type"
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option value="10">Decimal</option>
            <option value="8">Octal</option>
            <option value="16">Hexadecimal</option>
            <option value="2">Binary </option>
          </select>
          <label>Choose Operation on numbers</label>
          <select
            className="browser-default"
            id="oper"
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Choose your option
            </option>
            <option id="add" value="add">
              Addition
            </option>
            <option id="sub" value="sub">
              Subtract
            </option>
            <option id="mul" value="mul">
              Multiply
            </option>
            <option id="div" value="div">
              Divide{" "}
            </option>
          </select>
          <div className="row">
            <div className="row">
              <div className="input-field col s6">
                <input
                  placeholder="First Number"
                  id="nu1"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field col s6">
                <input
                  placeholder="Secound Number"
                  id="nu2"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit">Resolve</button>
        </form>
        <h1>Result in Decimal: {this.props.result.decimal}</h1>
        <h1>Result: {this.props.result.sum}</h1>
      </div>
    );
  }
}
export default Show;
