import React,{useState} from "react";

function App(){

  const [num,setNum]=useState("");
  const [result,setResult] = useState("");

  function checkEvenOdd(){
    if (num % 2 == 0){
      setResult("Even Number");
    }
    else{
      setResult("Odd number");
    }
  }

  function calculateexpr(){
    const a = Number(num);
    const b = a - 15;
    const res = ((a+b)/(a-b))*(a+b);
    setResult(res);
  }

  return (
    <div>
      <h1>My Calculator</h1>

      <input 
        type="number" 
        value={num} 
        onChange={(e)=>setNum(e.target.value)}
      />

      <br/><br/>

      <button onClick={checkEvenOdd}>Even_Odd</button>
      <button onClick={calculateexpr}>Expr</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;
