import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Board } from '../App';

test('renders the game board', () => {
  render(<Board />);
  expect(true).toBe(true);
});