import React, { useState } from 'react'
import Board from './Board'
import { checkWin, minmax, getNextMoves } from './minmax'

const Game = () => {
  const emptyBoard = Array(20).fill().map(() => Array(20).fill(null)) // Game board
  const [board, setBoard] = useState(emptyBoard)
  const [waitAi, setWaitAi] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [nextMovesList, setNextMovesList] = useState([]) // Next moves for AI opponent

  const handleClick = (row, col) => {
    if (gameOver) {
      console.log('Game over!')
      return
    }
    
    if (board[row][col] || waitAi) {
      return // Ignore if cell is occupied or AI is thinking
    }

    console.log('clicked:', row, col)
  
    // Update player's move in functional style
    const newBoard = board.map((r, rowIndex) =>
      r.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return 'X' // Player's move
        }
        return cell // Don't update
      })
    )

    // Update nextMovesList
    const nextMovesList2 = getNextMoves(newBoard, nextMovesList, row, col)
    setNextMovesList(nextMovesList2)

    setBoard(newBoard) 

    // return if player won
    if (checkWin(newBoard, 'X',  row,  col)) {
      console.log('PLAYER won the game!')
      setGameOver(true)
      return
    }

    setWaitAi(true) // Wait for AI move
  
    // Don't block render
    setTimeout(() => {
      const bestMove = findBestMove(newBoard, nextMovesList2, row, col) // Determine AI's best move
      console.log('best for AI:', bestMove)
      const newBoard2 = newBoard.map((r, rowIndex) =>
        r.map((cell, colIndex) => {
          if (rowIndex === bestMove.row && colIndex === bestMove.col) {
            return 'O' // AI's move
          }
          return cell
        })
      )

      const nextMovesList3 = getNextMoves(newBoard, nextMovesList2, bestMove.row, bestMove.col)
      setNextMovesList(nextMovesList3)
      setBoard(newBoard2) 
      setWaitAi(false) // AI move complete

      if (checkWin(newBoard2, 'O',  bestMove.row,  bestMove.col)) {
        console.log('AI won the game!')
        setGameOver(true)
        return
      }
    }, 0)
  }
 

  const findBestMove = (board, nextMovesList, row, col) => {
    const res = minmax(board, nextMovesList, 2, true, row, col, -Infinity, Infinity)
    return { score: res.score, row: res.row, col: res.col }
  }

  return (
    <div className="game">
      <Board board={board} handleClick={handleClick} />
    </div>
  )
}

export default Game
