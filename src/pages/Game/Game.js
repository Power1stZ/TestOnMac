import React, { useState, useEffect } from "react";
import "./Game.css";
//import { Score } from "../../components/Score/Score";
import { Card } from "../../components/Card/Card";

export const Game = () => {
  const [turn, setTurn] = useState(0);
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [draw, setDraw] = useState(0);

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [winner, setWinner] = useState(null);
  const [r1, setR1] = useState("nCircle");
  const [r2, setR2] = useState("nCircle");
  const [r3, setR3] = useState("nCircle");
  const [end, setEnd] = useState(true);
  //const [rs, setRs] = useState("null");

  useEffect(() => {
    if (player2 != null && end) {
      //console.log(selectWinner());
      //console.log(player1, player2, end);
      if (
        (player1 === 0 && player2 === 2) ||
        (player1 === 1 && player2 === 0) ||
        (player1 === 2 && player2 === 1)
      ) {
        setWin((prev) => prev + 1);
      } else if (player1 === player2) {
        setDraw((prev) => prev + 1);
      } else {
        setLose((prev) => prev + 1);
      }
    }
    //console.log(player1, player2, end);
  }, [player2, end]);

  const randomP2 = () => {
    var count = 0;
    setTurn((prev) => prev + 1);
    setPlayer2(null);
    setWinner(null);
    setEnd(false);
    if (player1 !== null) {
      let time = setInterval(() => {
        setPlayer2(Math.floor(Math.random() * 3));
        count++;
        if (count > 5) {
          setWinner(selectWinner());
          setEnd(true);
          clearInterval(time);
        }
      }, 300);
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
    } else {
      return "Player2 is the winner";
    }
  };

  const selectWeapon = (weapon) => {
    setPlayer1(weapon);
    setPlayer2(null);
    setWinner(null);
  };

  return (
    <div>
      <h1>Turn : {turn}</h1>
      <h1>
        Win : {win} | Draw : {draw} | Lose : {lose}
      </h1>
      <div className="card-arrangement">
        <Card choice={player1} player="p1" />
        <button className="fight-btn" onClick={randomP2}>
          Fight
        </button>
        <Card choice={player2} player="p2" />
      </div>
      <h1>Choose Your Hand</h1>
      <div className="select-choice">
        <button onClick={() => selectWeapon(0)}>Rock</button>
        <button onClick={() => selectWeapon(1)}>Paper</button>
        <button onClick={() => selectWeapon(2)}>Scissors</button>
      </div>

      <div>
        <h1>{winner ? selectWinner() : null}</h1>
      </div>
    </div>
  );
};
