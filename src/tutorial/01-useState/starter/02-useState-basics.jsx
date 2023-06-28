import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
