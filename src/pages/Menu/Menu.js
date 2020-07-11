import React, { useState, useEffect } from "react";
import "./Menu.css";

export const Menu = () => {
  const [choice, setChoice] = useState(() => 0);
  useEffect(() => console.log(choice), [choice]);
  const increment = () => {
    setChoice((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{choice}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};
