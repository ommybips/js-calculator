import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");
  const [justEvaluated, setJustEvaluated] = useState(false);

  const handleClick = (e) => {
    switch (e.target.id) {
      case "clear":
        setDisplay("0");
        setFormula("");
        break;
      case "one":
        if (justEvaluated) {
          setDisplay("1");
          setFormula("1");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "1"
            : display === "+"
            ? "1"
            : display === "-"
            ? "1"
            : display === "*-"
            ? "1"
            : display === "/"
            ? "1"
            : display + "1"
        );
        setFormula(formula === "0" ? "1" : formula + "1");
        break;
      case "two":
        if (justEvaluated) {
          setDisplay("2");
          setFormula("2");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "2"
            : display === "+"
            ? "2"
            : display === "-"
            ? "2"
            : display === "*-"
            ? "2"
            : display === "/"
            ? "2"
            : display + "2"
        );
        setFormula(formula === "0" ? "2" : formula + "2");
        break;
      case "three":
        if (justEvaluated) {
          setDisplay("3");
          setFormula("3");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "3"
            : display === "+"
            ? "3"
            : display === "-"
            ? "3"
            : display === "*-"
            ? "3"
            : display === "/"
            ? "3"
            : display + "3"
        );
        setFormula(formula === "0" ? "3" : formula + "3");
        break;
      case "four":
        if (justEvaluated) {
          setDisplay("4");
          setFormula("4");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "4"
            : display === "+"
            ? "4"
            : display === "-"
            ? "4"
            : display === "*-"
            ? "4"
            : display === "/"
            ? "4"
            : display + "4"
        );
        setFormula(formula === "0" ? "4" : formula + "4");
        break;
      case "five":
        if (justEvaluated) {
          setDisplay("5");
          setFormula("5");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "5"
            : display === "+"
            ? "5"
            : display === "-"
            ? "5"
            : display === "*-"
            ? "5"
            : display === "/"
            ? "5"
            : display + "5"
        );
        setFormula(formula === "0" ? "5" : formula + "5");
        break;
      case "six":
        if (justEvaluated) {
          setDisplay("6");
          setFormula("6");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "6"
            : display === "+"
            ? "6"
            : display === "-"
            ? "6"
            : display === "*-"
            ? "6"
            : display === "/"
            ? "6"
            : display + "6"
        );
        setFormula(formula === "0" ? "6" : formula + "6");
        break;
      case "seven":
        if (justEvaluated) {
          setDisplay("7");
          setFormula("7");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "7"
            : display === "+"
            ? "7"
            : display === "-"
            ? "7"
            : display === "*-"
            ? "7"
            : display === "/"
            ? "7"
            : display + "7"
        );
        setFormula(formula === "0" ? "7" : formula + "7");
        break;
      case "eight":
        if (justEvaluated) {
          setDisplay("8");
          setFormula("8");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "8"
            : display === "+"
            ? "8"
            : display === "-"
            ? "8"
            : display === "*-"
            ? "8"
            : display === "/"
            ? "8"
            : display + "8"
        );
        setFormula(formula === "0" ? "8" : formula + "8");
        break;
      case "nine":
        if (justEvaluated) {
          setDisplay("9");
          setFormula("9");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? "9"
            : display === "+"
            ? "9"
            : display === "-"
            ? "9"
            : display === "*-"
            ? "9"
            : display === "/"
            ? "9"
            : display + "9"
        );
        setFormula(formula === "0" ? "9" : formula + "9");
        break;
      case "zero":
        if (justEvaluated) {
          setDisplay("0");
          setFormula("0");
          setJustEvaluated(false);
          return;
        }
        setDisplay(
          display === "0"
            ? display
            : display === "+"
            ? display
            : display === "-"
            ? display
            : display === "*-"
            ? display
            : display === "/"
            ? display
            : display + "0"
        );
        setFormula(
          display === "0"
            ? display
            : formula[formula.length - 1] === "+"
            ? formula
            : formula[formula.length - 1] === "-"
            ? formula
            : formula[formula.length - 1] === "*-"
            ? formula
            : formula[formula.length - 1] === "/"
            ? formula
            : formula + "0"
        );
        break;
      case "decimal":
        if (!display.includes(".")) {
          setDisplay(display + ".");
          setFormula(formula + ".");
        }
        break;
      case "add":
        if (formula === "" || formula === "0") return;
        if (
          formula[formula.length - 1] === "+" ||
          formula[formula.length - 1] === "*" ||
          formula[formula.length - 1] === "/"
        ) {
          setDisplay("+");
          setFormula(formula.slice(0, -1) + "+");
        } else if (formula[formula.length - 1] === "-") {
          if (
            formula[formula.length - 2] === "*" ||
            formula[formula.length - 2] === "/" ||
            formula[formula.length - 2] === "+"
          ) {
            setDisplay("+");
            setFormula(formula.slice(0, -2) + "+");
          } else {
            setDisplay("+");
            setFormula(formula.slice(0, -1) + "+");
          }
        } else {
          setDisplay("+");
          setFormula(formula + "+");
          setJustEvaluated(false);
        }
        break;
      case "subtract":
        if (formula === "" || formula === "0") return;
        if (formula[formula.length - 1] === "-") {
          setDisplay("-");
          setFormula(formula.slice(0, -1) + "-");
        } else {
          setDisplay("-");
          setFormula(formula + "-");
          setJustEvaluated(false);
        }
        break;
      case "multiply":
        if (formula === "" || formula === "0") return;
        if (
          formula[formula.length - 1] === "+" ||
          formula[formula.length - 1] === "*" ||
          formula[formula.length - 1] === "/"
        ) {
          setDisplay("*");
          setFormula(formula.slice(0, -1) + "*");
        } else if (formula[formula.length - 1] === "-") {
          if (
            formula[formula.length - 2] === "*" ||
            formula[formula.length - 2] === "/" ||
            formula[formula.length - 2] === "+"
          ) {
            setDisplay("*");
            setFormula(formula.slice(0, -2) + "*");
          } else {
            setDisplay("*");
            setFormula(formula.slice(0, -1) + "*");
          }
        } else {
          setDisplay("*");
          setFormula(formula + "*");
          setJustEvaluated(false);
        }
        break;
      case "divide":
        if (formula === "" || formula === "0") return;
        if (
          formula[formula.length - 1] === "+" ||
          formula[formula.length - 1] === "*" ||
          formula[formula.length - 1] === "/"
        ) {
          setDisplay("/");
          setFormula(formula.slice(0, -1) + "/");
        } else if (formula[formula.length - 1] === "-") {
          if (
            formula[formula.length - 2] === "*" ||
            formula[formula.length - 2] === "/" ||
            formula[formula.length - 2] === "+"
          ) {
            setDisplay("/");
            setFormula(formula.slice(0, -2) + "/");
          } else {
            setDisplay("/");
            setFormula(formula.slice(0, -1) + "/");
          }
        } else {
          setDisplay("/");
          setFormula(formula + "/");
          setJustEvaluated(false);
        }
        break;
      case "equals":
        if (formula === "") return setFormula(display);
        else {
          setDisplay(eval(formula));
          setFormula(eval(formula));
          setJustEvaluated(true);
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
          <button id="clear" className="big-btn" onClick={handleClick}>
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
          <button id="subtract" className="symbols" onClick={handleClick}>
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
          <button id="add" className="symbols" onClick={handleClick}>
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
          <button id="equals" onClick={handleClick}>
            =
          </button>
          <button id="zero" className="big-btn" onClick={handleClick}>
            0
          </button>
          <button id="decimal" onClick={handleClick}>
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
