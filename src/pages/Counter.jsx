import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-page">
      <h1>Counter</h1>
      <div className="counter-container">
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="counter-controls">
          <button onClick={decrement} className="counter-btn decrement">
            -
          </button>
          <button onClick={reset} className="counter-btn reset">
            Reset
          </button>
          <button onClick={increment} className="counter-btn increment">
            +
          </button>
        </div>
      </div>
      <p className="counter-info">Hozirgi qiymat: {count}</p>
    </div>
  );
}

export default Counter;
