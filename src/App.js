import React, { useState } from "react";

function App() {

  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  // a) Expression Evaluation
  function calculateExpression() {
    const a = Number(num);
    const b = a - 15;

    const res = ((a + b) / (a - b)) * (a + b);
    setResult(res);
  }

  // b) Sum of squares of digits
  function modSumSquare() {
    let n = Math.abs(Number(num));
    let sum = 0;

    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    setResult(sum);
  }

  // c) Even or Odd
  function checkEvenOdd() {
    if (Number(num) % 2 === 0)
      setResult("Even Number");
    else
      setResult("Odd Number");
  }

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={styles.input}
      />

      <div>
        <button onClick={calculateExpression} style={styles.button}>
          Evaluate Expression
        </button>

        <button onClick={modSumSquare} style={styles.button}>
          MoD_Sum_square
        </button>

        <button onClick={checkEvenOdd} style={styles.button}>
          Even_ODD
        </button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

// Minimal CSS
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  input: {
    padding: "8px",
    marginBottom: "15px",
    width: "200px"
  },
  button: {
    margin: "5px",
    padding: "8px 12px"
  }
};

export default App;
