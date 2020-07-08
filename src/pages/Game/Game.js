import React, { useState } from "react";
import "./Game.css";
import { Score } from "../../components/Score/Score";
import { Card } from "../../components/Card/Card";

export const Game = () => {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [winner, setWinner] = useState(null);
  const [r1, setR1] = useState("nCircle");
  const [r2, setR2] = useState("win");
  const [r3, setR3] = useState("lose");

  const randomP2 = () => {
    let count = 0;
    setWinner(null);
    if (player1 >= 0) {
      let time = setInterval(() => {
        setPlayer2(Math.floor(Math.random() * 3));
        count++;
        if (count > 5) {
          clearInterval(time);
          setWinner(selectWinner());
        }
      }, 200);
    }
  };
  const selectWinner = () => {
    if (
      (player1 === 0 && player2 === 2) ||
      (player1 === 1 && player2 === 0) ||
      (player1 === 2 && player2 === 1)
    ) {
      return "Player1 is the winner";
    } else if (player1 === player2) {
      return "Wow!! It's Draw";
    } else return "Player2 is the winner";
  };
  const selectWeapon = (weapon) => {
    setPlayer1(weapon);
    setPlayer2(null);
    setWinner(null);
  };

  return (
    <div>
      <div>
        <Score result1={r1} result2={r2} result3={r3} />
      </div>

      <div className="card-arrangement">
        <Card choice={player1} player="p1" />
        <Card choice={player2} player="p2" />
      </div>

      <div className="select-choice">
        <button onClick={() => selectWeapon(0)}>Rock</button>
        <button onClick={() => selectWeapon(1)}>Paper</button>
        <button onClick={() => selectWeapon(2)}>Scissors</button>
      </div>
      <div className="fight-btn">
        <button onClick={randomP2}>Fight</button>
      </div>
      <div>
        <h1>{winner ? selectWinner() : null}</h1>
      </div>
    </div>
  );
};
