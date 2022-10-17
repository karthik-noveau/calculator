import { useState } from "react";
import "./calculator.css";

function Calculator() {

  const [result, setResult] = useState("");
  const handleClick = e => {
    setResult(result.concat(e.target.name));
  };

  console.log(typeof result);
  //clear
  const clear = () => {
    setResult("");
  };

  //backSpace
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  //calculate
  const calc = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }
  };

  return (
    <div>
      <div class="container">

        <h1 class="title">React Calculator</h1>

        <div class="calculator">

          <input type="text" class="calc-numbers" value={result} />

          <div class="calculator-buttons">
            <button onClick={clear} class="btn clear span-2">
              C
            </button>
            <button onClick={backSpace} class="btn orange ">
              &larr;
            </button>
            <button onClick={handleClick} name="/" class="btn orange ">
              &divide;
            </button>
            <button onClick={handleClick} name="7" class="btn">
              7
            </button>
            <button onClick={handleClick} name="8" class="btn">
              8
            </button>
            <button onClick={handleClick} name="6" class="btn">
              9
            </button>
            <button onClick={handleClick} name="*" class="btn orange">
              x
            </button>
            <button onClick={handleClick} name="4" class="btn">
              4
            </button>
            <button onClick={handleClick} name="5" class="btn">
              5
            </button>
            <button onClick={handleClick} name="6" class="btn">
              6
            </button>
            <button onClick={handleClick} name="-" class="btn orange">
              -
            </button>
            <button onClick={handleClick} name="1" class="btn">
              1
            </button>
            <button onClick={handleClick} name="2" class="btn">
              2
            </button>
            <button onClick={handleClick} name="3" class="btn">
              3
            </button>
            <button onClick={handleClick} name="+" class="btn orange">
              +
            </button>
            <button onClick={handleClick} name="0" class="btn">
              0
            </button>
            <button onClick={handleClick} name="." class="btn">
              .
            </button>
            <button onClick={calc} name="=" class="btn orange  equal span-2">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
