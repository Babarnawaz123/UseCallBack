import React, { useState } from "react";

// Child Component
const Child = ({ onClick }) => {
  console.log("Child rendered 👶");
  return <button onClick={onClick}>Click Me</button>;
};

// Parent Component
const UseCallBack = () => {
  const [count, setCount] = useState(0);

  // Function recreated every render ❌
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      {/* Passing function as prop */}
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallBack;
