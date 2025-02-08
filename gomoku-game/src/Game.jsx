import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const emptyBoard = Array(20).fill().map(() => Array(20).fill(null)); 
  const [board, setBoard] = useState(emptyBoard);
  const [isXNext, setIsXNext] = useState(true); 
  const [winner, setWinner] = useState(null);


  const handleClick = (row, col) => {
    if (board[row][col] || winner) {
      return;
    }
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return isXNext ? 'X' : 'O';
        }
        return cell;
      })
    );
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  // TODO: Voitontarkistus
  const calculateWinner = (board, row, col) => {
    //const current = isXNext ? 'O' : 'X';
    setWinner('X')
    return true;
  };  

  return (
    <div className="game">
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};

export default Game;
