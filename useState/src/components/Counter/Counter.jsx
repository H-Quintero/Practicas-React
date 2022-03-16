import React, { useState } from "react";
import Button from "../Button/Button";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
    if (count <= 1) {
      setCount(0);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };
  const increase5 = () => {
    setCount(count + 5);
  };
  const decrease5 = () => {
    setCount(count - 5);
    if (count <= 1) {
      setCount(0);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <Button onClick={increase5}>+5</Button>
        <Button onClick={increase}>+</Button>
        <Button onClick={decrease}>-</Button>
        <Button onClick={decrease5}>-5</Button>
      </div>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
