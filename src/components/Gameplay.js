import React, { useState } from "react";
import { calculateWinner } from "../workeforce";
import Board from "./Board";

const Gameplay = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  const wL = xIsNext ? "EX" : "OH";

 const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const box = [...current];
    // return if won or occupied
    if (winner || box[i]) return;
    // select square
    box[i] = xO;
    setHistory([...historyPoint, box]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };



  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `past move #${move}` : "let's Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <Board boxes={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>What Have you Done:</h3>
          {renderMoves()}
        </div>
        <h3>{ winner ? "Winner: " + winner : "Next Player: " + wL }</h3>
      </div>
    </>
  );
};

export default Gameplay;