import React, { useState, useEffect } from 'react';
import Board from './Board';
import Status from './Status';
import './App.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'r') {
        resetGame();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winningPlayer = calculateWinner(newBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
    } else if (newBoard.every(cell => cell)) {
      setWinner('Draw');
    }
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div className="game">
      <Board board={board} onClick={handleClick} />
      <Status winner={winner} isXNext={isXNext} />
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Game;