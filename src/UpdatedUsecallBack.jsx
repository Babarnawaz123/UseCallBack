import React, { useState, useCallback } from "react";

// Child Component
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered 👶");
  return <button onClick={onClick}>Click Me</button>;
});

// Parent Component
const UpdatedUseCallBack = () => {
  const [count, setCount] = useState(0);

  // ✅ Function reference is memoized
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // no dependencies → same reference every render

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default UpdatedUseCallBack;
