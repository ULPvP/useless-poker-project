import React, { useState } from 'react';

const GameHistory = () => {
  const [gameHistory, setGameHistory] = useState([]);

  const addGame = (result, handsPlayed, profit) => {
    setGameHistory([
      ...gameHistory,
      { result, handsPlayed, profit },
    ]);
  };

  return (
    <div>
      <button onClick={() => addGame('Win', 100, 50)}>Add Game</button>
      <table>
        <thead>
          <tr>
            <th>Result</th>
            <th>Hands Played</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {gameHistory.map((game, index) => (
            <tr key={index}>
              <td>{game.result}</td>
              <td>{game.handsPlayed}</td>
              <td>{game.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GameHistory;