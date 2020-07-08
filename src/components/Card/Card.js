import React from "react";
import "./Card.css";
import rock from "./rock.png";
import paper from "./paper.png";
import scissors from "./scissors.png";
import waiting from "./null.png";
export const Card = ({ choice, player }) => {
  let weapon = waiting;

  if (choice === 0) weapon = rock;
  else if (choice === 1) weapon = paper;
  else if (choice === 2) weapon = scissors;
  else weapon = waiting;

  return (
    <div>
      <img src={weapon} className={player} />
    </div>
  );
};
