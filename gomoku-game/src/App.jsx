import React, { useState } from 'react';
import './App.css';

export const Board = () => {
  return (
    <div className="board">
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Gomoku Game</h1>
      <Board />
    </div>
  );
};

export default App;