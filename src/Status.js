import React from 'react';

const Status = ({ winner, isXNext }) => {
  return (
    <div className="winner">
      {winner ? (
        winner === 'Draw' ? "It's a Draw!" : `Player ${winner} Wins!`
      ) : (
        `Next Player: ${isXNext ? 'X' : 'O'}`
      )}
    </div>
  );
};

export default Status;
