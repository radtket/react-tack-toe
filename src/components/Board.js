import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "../helpers/helpers";

const Board = () => {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const handleClick = i => {
    setState(prev => {
      const copy = { ...prev };
      copy.squares[i] = copy.xIsNext ? "X" : "O";
      copy.xIsNext = !copy.xIsNext;
      const winner = calculateWinner(copy.squares);
      const status = winner
        ? `Winner: ${winner}`
        : `Next player: ${state.xIsNext ? "X" : "O"}`;
      return {
        ...copy,
        winner,
        status,
      };
    });
  };

  return (
    <div>
      <div className="status">{state.status}</div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state.squares[0]} />
        <Square onClick={() => handleClick(1)} value={state.squares[1]} />
        <Square onClick={() => handleClick(2)} value={state.squares[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state.squares[3]} />
        <Square onClick={() => handleClick(4)} value={state.squares[4]} />
        <Square onClick={() => handleClick(5)} value={state.squares[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state.squares[6]} />
        <Square onClick={() => handleClick(7)} value={state.squares[7]} />
        <Square onClick={() => handleClick(8)} value={state.squares[8]} />
      </div>
    </div>
  );
};

export default Board;
