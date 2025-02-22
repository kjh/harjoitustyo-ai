import React, { useState } from 'react';
import Board from './Board';
import { checkWin, minmax, getNextMoves } from './minmax';

const Game = () => {
  const emptyBoard = Array(20).fill().map(() => Array(20).fill(null)); 
  const [board, setBoard] = useState(emptyBoard);
  const [isXNext, setIsXNext] = useState(true); 
  const [waitAi, setWaitAi] = useState(false);

  const [nextMovesList, setNextMovesList] = useState([]);

  const handleClick = (row, col) => {
    if (board[row][col] || waitAi) {
      return; // Ignore if cell is occupied or AI is thinking
    }

    console.log('clicked:', row, col)
  
    // Update player's move
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return 'X'; // Player's move
        }
        return cell;
      })
    );

    const nextMovesList2 = getNextMoves(newBoard, nextMovesList, row, col)
    setNextMovesList(nextMovesList2)


  
    setBoard(newBoard); 
    setIsXNext(!isXNext); 
    setWaitAi(true); // Wait for AI move
  
    // Don't block render
    setTimeout(() => {
      const bestMove = findBestMove(newBoard, nextMovesList2, row, col); // Determine AI's best move

      const newBoard2 = newBoard.map((r, rowIndex) =>
        r.map((cell, colIndex) => {
          if (rowIndex === bestMove.row && colIndex === bestMove.col) {
            return 'O'; // AI's move
          }
          return cell;
        })
      );

      const nextMovesList3 = getNextMoves(newBoard, nextMovesList2, bestMove.row, bestMove.col)
      
      setNextMovesList(nextMovesList3)
      setBoard(newBoard2); 
      setIsXNext(true); 
      setWaitAi(false); // AI move complete
    }, 0);
  };
 

  const findBestMove = (board, nextMovesList, row, col) => {
    const res = minmax(board, nextMovesList, 3, true) 
    console.log('best for AI:', res)
    return { row: res.row, col: res.col };
  };

  return (
    <div className="game">
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};

export default Game;
