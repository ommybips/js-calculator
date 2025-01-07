import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");

  const handleClick = (e) => {
    switch (e.target.id) {
      case "ac":
        setDisplay("0");
        setFormula("");
        break;
      case "one":
        setDisplay(display === "0" ? "1" : display + "1");
        setFormula(formula + "1");
        break;
      case "two":
        setDisplay(display === "0" ? "2" : display + "2");
        setFormula(formula + "2");
        break;
      case "three":
        setDisplay(display === "0" ? "3" : display + "3");
        setFormula(formula + "3");
        break;
      case "four":
        setDisplay(display === "0" ? "4" : display + "4");
        setFormula(formula + "4");
        break;
      case "five":
        setDisplay(display === "0" ? "5" : display + "5");
        setFormula(formula + "5");
        break;
      case "six":
        setDisplay(display === "0" ? "6" : display + "6");
        setFormula(formula + "6");
        break;
      case "seven":
        setDisplay(display === "0" ? "7" : display + "7");
        setFormula(formula + "7");
        break;
      case "eight":
        setDisplay(display === "0" ? "8" : display + "8");
        setFormula(formula + "8");
        break;
      case "nine":
        setDisplay(display === "0" ? "9" : display + "9");
        setFormula(formula + "9");
        break;
      case "zero":
        setDisplay(display === "0" ? "0" : display + "0");
        setFormula(formula + "0");
        break;
      case "dot":
        if (!display.includes(".")) {
          setDisplay(display + ".");
          setFormula(formula + ".");
        }
        break;
      case "plus":
        setDisplay("+");
        setFormula(formula + "+");
        break;
      case "minus":
        setDisplay("-");
        setFormula(formula + "-");
        break;
      case "multiply":
        setDisplay("*");
        setFormula(formula + "*");
        break;
      case "divide":
        setDisplay("/");
        setFormula(formula + "/");
        break;
      case "equal":
        if (formula === "") return setFormula(display);
        else {
          setDisplay(eval(formula));
          setFormula(eval(formula));
        }
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="formula">{formula}</div>
        <div className="output" id="display">
          {display}
        </div>
        <div className="buttons">
          <button id="ac" className="big-btn" onClick={handleClick}>
            AC
          </button>
          <button id="divide" className="symbols" onClick={handleClick}>
            /
          </button>
          <button id="multiply" className="symbols" onClick={handleClick}>
            x
          </button>
          <button id="seven" onClick={handleClick}>
            7
          </button>
          <button id="eight" onClick={handleClick}>
            8
          </button>
          <button id="nine" onClick={handleClick}>
            9
          </button>
          <button id="minus" className="symbols" onClick={handleClick}>
            -
          </button>
          <button id="four" onClick={handleClick}>
            4
          </button>
          <button id="five" onClick={handleClick}>
            5
          </button>
          <button id="six" onClick={handleClick}>
            6
          </button>
          <button id="plus" className="symbols" onClick={handleClick}>
            +
          </button>
          <button id="one" onClick={handleClick}>
            1
          </button>
          <button id="two" onClick={handleClick}>
            2
          </button>
          <button id="three" onClick={handleClick}>
            3
          </button>
          <button id="equal" onClick={handleClick}>
            =
          </button>
          <button id="zero" className="big-btn" onClick={handleClick}>
            0
          </button>
          <button id="dot" onClick={handleClick}>
            .
          </button>
        </div>
      </div>
      <p id="credits">
        Designed and Coded By
        <br />
        ommybips
      </p>
    </>
  );
}

export default App;
