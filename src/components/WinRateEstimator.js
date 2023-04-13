import React, { useState } from 'react';
import { generateDeck, simulateHand } from './utils';


const WinRateEstimator = () => {
  const [winRate, setWinRate] = useState(0);

  const estimateWinRate = (hand, communityCards, opponents, iterations = 10000) => {
    let wins = 0;
  
    for (let i = 0; i < iterations; i++) {
      const deck = generateDeck().filter((card) => !hand.includes(card) && !communityCards.includes(card));
      if (simulateHand(deck, hand, [...communityCards], opponents)) {
        wins++;
      }
    }
  
    return wins / iterations;
  };
  

  const handleEstimateWinRate = () => {
    // Pass in your hand, community cards, and opponents here
    const estimatedWinRate = estimateWinRate();
    setWinRate(estimatedWinRate);
  };

  return (
    <div>
      <button onClick={handleEstimateWinRate}>Estimate Win Rate</button>
      <p>Win Rate: {winRate}</p>
    </div>
  );
};
export default WinRateEstimator;