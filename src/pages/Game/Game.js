import React, { useState, useEffect } from "react";
import "./Game.css";
import { Score } from "../../components/Score/Score";
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

  useEffect(() => {
    if (player2 != null && end) {
      //console.log(player2, end, turn);
      if (turn === 1) {
        if (selectWinner() === "Player1 is the winner") {
          setR1("win");
        } else if (selectWinner() === "Wow!! It's Draw") {
          setR1("draw");
        } else {
          setR1("lose");
        }
      } else if (turn === 2) {
        if (selectWinner() === "Player1 is the winner") {
          setR2("win");
        } else if (selectWinner() === "Wow!! It's Draw") {
          setR2("draw");
        } else {
          setR2("lose");
        }
      } else if (turn === 3) {
        if (selectWinner() === "Player1 is the winner") {
          setR3("win");
        } else if (selectWinner() === "Wow!! It's Draw") {
          setR3("draw");
        } else {
          setR3("lose");
        }
      }
    }
  }, [player2, end, turn]);

  useEffect(() => {
    if (turn === 3 && r3 !== "nCircle") {
      let temp1 = 0;
      let temp2 = 0;
      let temp3 = 0;

      if (r1 === "win") temp1 = 1;
      else if (r1 === "lose") temp1 = -1;

      if (r2 === "win") temp2 = 1;
      else if (r2 === "lose") temp2 = -1;

      if (r3 === "win") temp3 = 1;
      else if (r3 === "lose") temp3 = -1;

      let sum = temp1 + temp2 + temp3;

      if (sum > 0) {
        setWin((prev) => prev + 1);
      } else if (sum === 0) {
        setDraw((prev) => prev + 1);
      } else {
        setLose((prev) => prev + 1);
      }
    }
  }, [turn, r3]);

  const randomP2 = () => {
    var count = 0;
    setPlayer2(null);
    setWinner(null);
    setEnd(false);
    if (turn >= 3) {
      setTurn((prev) => 0);
      setR1("nCircle");
      setR2("nCircle");
      setR3("nCircle");
    }
    if (player1 !== null) {
      let time = setInterval(() => {
        setPlayer2(Math.floor(Math.random() * 3));
        count++;
        if (count > 5) {
          setWinner(selectWinner());
          setTurn((prev) => prev + 1);
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
      <div>
        <h1>{winner ? selectWinner() : "Waiting For Result"}</h1>
      </div>
      <Score result1={r1} result2={r2} result3={r3} />
      <div className="result-template">
        <div className="round-result">
          <h2>Round Result</h2>
          <h2>
            Win : {win} | Draw : {draw} | Lose : {lose}
          </h2>
        </div>
      </div>

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
    </div>
  );
};
