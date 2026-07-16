import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-danger">
          Decrease
        </button>
        <button onClick={reset} className="btn btn-secondary">
          Reset
        </button>
        <button onClick={increment} className="btn btn-success">
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
