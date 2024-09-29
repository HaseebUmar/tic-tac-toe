import React from 'react';
import Cell from './Cell';

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

export default Board;