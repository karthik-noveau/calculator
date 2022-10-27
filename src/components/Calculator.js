import React, { Component } from "react";
import "./calculator.css";

class App extends Component {
  state = {
    result: "",
    display: "",
    final_res: ""
  };

  onClick = (button) => {
    if (
      button != "=" &&
      button != "C" &&
      button != "CE" &&
      button != "(" &&
      button != ")"
    ) {
      this.setState({
        display: this.state.display + button
      });
    }

    if (button === "=") {
      this.calculate();
      this.setState({ display: "" });
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        final_res: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="main_container">
      <div className="container">

        <h1 className="title">React Calculator</h1>

        <div className="calculator">

          <input type="text" className="calc-numbers calc-numbers-one" value={this.state.result} />
          <input type="text" className="calc-numbers" value={this.state.final_res} />


          <div className="calculator-buttons">
            <button name="C" onClick={(e) => this.onClick(e.target.name)}>
            C
            </button>
            <button name="CE" onClick={(e) => this.onClick(e.target.name)} className="btn orange ">
              &larr;
            </button>
            <button name="/" onClick={(e) => this.onClick(e.target.name)} className="btn orange ">
              &divide;
            </button>
            <button name="7" onClick={(e) => this.onClick(e.target.name)} className="btn">
              7
            </button>
            <button name="8" onClick={(e) => this.onClick(e.target.name)} className="btn">
              8
            </button>
            <button name="9" onClick={(e) => this.onClick(e.target.name)} className="btn">
              9
            </button>
            <button name="*" onClick={(e) => this.onClick(e.target.name)} className="btn orange">
              x
            </button>
            <button name="4" onClick={(e) => this.onClick(e.target.name)} className="btn">
              4
            </button>
            <button name="5" onClick={(e) => this.onClick(e.target.name)} className="btn">
              5
            </button>
            <button name="6" onClick={(e) => this.onClick(e.target.name)} className="btn">
              6
            </button>
            <button name="-" onClick={(e) => this.onClick(e.target.name)} className="btn orange">
              -
            </button>
            <button name="1" onClick={(e) => this.onClick(e.target.name)} className="btn">
              1
            </button>
            <button name="2" onClick={(e) => this.onClick(e.target.name)} className="btn">
              2
            </button>
            <button name="3" onClick={(e) => this.onClick(e.target.name)} className="btn">
              3
            </button>
            <button name="+" onClick={(e) => this.onClick(e.target.name)} className="btn orange">
              +
            </button>
            <button name="0" onClick={(e) => this.onClick(e.target.name)} className="btn">
              0
            </button>
            <button name="." onClick={(e) => this.onClick(e.target.name)} className="btn">
              .
            </button>
            <button name="=" onClick={(e) => this.onClick(e.target.name)} className="btn orange  equal span-2">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
