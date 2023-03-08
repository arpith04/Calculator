import React, { useState } from "react";
import Display from "./components/Display";
import Heading from "./components/Heading";
import Keypad from "./components/Keypad";


const App = () => {
  const [result, setResult] = useState("")

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  }

  const onClearHandler = () => {
    setResult("")
  }

  const onBackspaceHandler = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const onResultHandler = () => {
    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult("Error")
    }
  }

  return (
    <div>
      <Heading />
      <div className="container">
        <Display onValue={result} />
        <Keypad onClick={handleClick} onClear={onClearHandler} onBackspace={onBackspaceHandler} onResult={onResultHandler} />
      </div>
    </div>
  )
}

export default App;
