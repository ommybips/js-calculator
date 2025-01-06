import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="calculator">
        <div className="formula"></div>
        <div className="output" id="display">
          0
        </div>
        <div className="buttons">
          <button id="ac" className="big-btn">
            AC
          </button>
          <button id="divide" className="symbols">
            /
          </button>
          <button id="multiply" className="symbols">
            x
          </button>
          <button id="seven">7</button>
          <button id="eight">8</button>
          <button id="nine">9</button>
          <button id="minus" className="symbols">
            -
          </button>
          <button id="four">4</button>
          <button id="five">5</button>
          <button id="six">6</button>
          <button id="plus" className="symbols">
            +
          </button>
          <button id="one">1</button>
          <button id="two">2</button>
          <button id="three">3</button>
          <button id="equal">=</button>
          <button id="zero" className="big-btn">
            0
          </button>
          <button id="dot">.</button>
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
