import React from "react";
import "./Score.css";
export const Score = ({ result1, result2, result3 }) => {
  return (
    <div className="circle-arrangement">
      <div className={result1}></div>
      <div className={result2}></div>
      <div className={result3}></div>
    </div>
  );
};
