
import React from "react";
import Box from "./Box";

const Board = ({ boxes, onClick }) => (
  <div className="board">
    {boxes.map((box, i) => (
      <Box key={i} value={box} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;