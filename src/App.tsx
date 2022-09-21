import React, { useState } from "react";
import "./App.scss";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>RAEV BEATS</h1>
      <h2>RAEV BEATS</h2>
      <h3>RAEV BEATS</h3>
      <h4>RAEV BEATS</h4>
      <h5>RAEV BEATS</h5>
      <h6>RAEV BEATS</h6>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;
