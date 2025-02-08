import React from 'react';
import './Board.css';

const Board = ({ board, handleClick }) => {
  const renderCell = (row, col) => (
    <button className="cell" onClick={() => handleClick(row, col)}>
      {board[row][col]}
    </button>
  );

  return (
    <div className="board">
      {board.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="cell-container">
            {renderCell(rowIndex, colIndex)}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
