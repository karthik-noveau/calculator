import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [Display, setDisplay] = useState('');
  const [currv, setCurrv] = useState('');
  const [prev, setPrev] = useState('');
  const [actionv, setActionv] = useState('');
  const [result, setResult] = useState('');
  var res = '';
  const numberButton = (e) => {
    let temp = e.target.name;

    setDisplay((e) => e + temp)
    setCurrv((e) => e + temp)

  }

  const actionButton = (e) => {

    let temp = e.target.name;
    setDisplay((e) => e + temp)
    if (prev === '') {
      setPrev(currv);
      console.log(currv)
      setCurrv('');
      setActionv(temp);
    }
    if (prev !== '') {
      setPrev(res);
      setActionv(temp)
      console.log(setPrev)
    }
  }

  const resultButton = () => {
    if (actionv === '/') {
      res = parseFloat(prev) / parseFloat(currv)
      setPrev(res)
    }
    else if (actionv === 'x') {
      res = parseFloat(prev) * parseFloat(currv)
      setPrev(res)
    }
    else if (actionv === '+') {
      res = parseFloat(prev) + parseFloat(currv)
      setPrev(res)
      setCurrv('');
      console.log("p " + prev);
      console.log("c " + currv);
    }

    else if (actionv === '-') {
      res = parseFloat(prev) - parseFloat(currv)
      setPrev(res)
    }
    else {
      res = 0;
    }
    setResult(res)

  }

  const backButton = () => {
    let len = Display.length;
    setDisplay(Display.slice(0, len - 1))
  }

  const clearButton = () => {
    setDisplay('')
    setCurrv('')
    setActionv('')
    setResult('')
    setPrev('')
  }


  return (
    <div className="main_container">
      <div className="container">

        <h1 className="title">React Calculator</h1>

        <div className="calculator">

          <input type="text" className="calc-numbers" value={Display} />
          <input type="text" className="calc-numbers" value={result} />


          <div className="calculator-buttons">
            <button onClick={clearButton} className="btn clear span-2">
              C
            </button>
            <button onClick={backButton} className="btn orange ">
              &larr;
            </button>
            <button onClick={actionButton} name="/" className="btn orange ">
              &divide;
            </button>
            <button onClick={numberButton} name="7" className="btn">
              7
            </button>
            <button onClick={numberButton} name="8" className="btn">
              8
            </button>
            <button onClick={numberButton} name="6" className="btn">
              9
            </button>
            <button onClick={actionButton} name="x" className="btn orange">
              x
            </button>
            <button onClick={numberButton} name="4" className="btn">
              4
            </button>
            <button onClick={numberButton} name="5" className="btn">
              5
            </button>
            <button onClick={numberButton} name="6" className="btn">
              6
            </button>
            <button onClick={actionButton} name="-" className="btn orange">
              -
            </button>
            <button onClick={numberButton} name="1" className="btn">
              1
            </button>
            <button onClick={numberButton} name="2" className="btn">
              2
            </button>
            <button onClick={numberButton} name="3" className="btn">
              3
            </button>
            <button onClick={actionButton} name="+" className="btn orange">
              +
            </button>
            <button onClick={numberButton} name="0" className="btn">
              0
            </button>
            <button onClick={numberButton} name="." className="btn">
              .
            </button>
            <button onClick={resultButton} name="=" className="btn orange  equal span-2">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
