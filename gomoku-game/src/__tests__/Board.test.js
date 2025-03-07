import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from '../Board'; 

test('renders the game board with initial state', () => {
  const initialBoard = Array(20).fill().map(() => Array(20).fill(null)); 
  
  render(<Board board={initialBoard} />);

  // check if the board is rendered
  const boardElement = screen.getByRole('grid'); // Ensure your Board component has the role="grid"
  expect(boardElement).toBeInTheDocument();
  
  // todo: check specific cells
  const cells = screen.getAllByRole('cell'); // Ensure your cell elements have the role="cell"
  expect(cells.length).toBe(400); // 20x20 grid
});
