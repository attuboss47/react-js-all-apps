import React, { useState } from "react";
import { CounterChild } from "./CounterChild";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    setCount(count - 2);
  };
  const handleAdd = () => {
    setCount(count + 2);
  };
  return (
    <div>
      {/* <button onClick={() => setCount(count + 2)}>inc</button> */}
      <button onClick={handleAdd}>inc</button>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count - 2)}>Dec</button> */}
      <button onClick={handleDec}>Dec</button>
      <CounterChild item={count} />)
    </div>
  );
};
