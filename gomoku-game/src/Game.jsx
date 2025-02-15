import React, { useState } from 'react';
import Board from './Board';
import { checkWin, minmax } from './minmax';

const Game = () => {
  const emptyBoard = Array(20).fill().map(() => Array(20).fill(null)); 
  const [board, setBoard] = useState(emptyBoard);
  const [isXNext, setIsXNext] = useState(true); 
  const [waitAi, setWaitAi] = useState(false);


  const handleClick = (row, col) => {
    if (board[row][col] || waitAi) {
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

    setWaitAi(true) // odota

    // Use setTimeout to force a second state update after the first render
    setTimeout(() => {
      const bestMove = findBestMove(newBoard, row, col);
      const newBoard2 = newBoard.map((r, rowIndex) =>
        r.map((cell, colIndex) => {
          if (rowIndex === bestMove.row && colIndex === bestMove.col) {
            return 'O'//isXNext ? 'X' : 'O';
          }
          return cell;
        })
      );
      setBoard(newBoard2);
      setIsXNext(true);
      setWaitAi(false) // valmis
    }, 0);
  };

  const findBestMove = (board, r, c) => {
    const res = minmax(board, 3, true) 
    return { row: res.row, col: res.col };
  };

  return (
    <div className="game">
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};

export default Game;
