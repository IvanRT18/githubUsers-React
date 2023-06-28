import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setInterval(() => {
      setCount((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    }, 3000);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" onClick={increaseCount}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
