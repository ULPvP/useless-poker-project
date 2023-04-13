import React, { useState } from 'react';
import { generateDeck, calculateHandStrength, simulateHand } from './utils';

const OddsCalculator = () => {
  const [odds, setOdds] = useState(0);

  const simulateHand = (deck, hand, communityCards, opponents) => {
    // Complete the community cards with random cards from the deck
    while (communityCards.length < 5) {
      const randomCard = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
      communityCards.push(randomCard);
    }
  
    // Generate opponent hands and calculate their hand strengths
    const opponentHandStrengths = [];
    for (let i = 0; i < opponents; i++) {
      const opponentHand = [];
      for (let j = 0; j < 2; j++) {
        const randomCard = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
        opponentHand.push(randomCard);
      }
      opponentHandStrengths.push(calculateHandStrength(opponentHand.concat(communityCards)));
    }
  
    // Calculate player hand strength
    const playerHandStrength = calculateHandStrength(hand.concat(communityCards));
  
    // Determine if the player wins the hand
    return playerHandStrength >= Math.max(...opponentHandStrengths);
  };
  
  const calculateOdds = (hand, communityCards, opponents, iterations = 10000) => {
    const deck = generateDeck().filter((card) => !hand.includes(card) && !communityCards.includes(card));
    let wins = 0;
  
    for (let i = 0; i < iterations; i++) {
      const deckCopy = [...deck];
      if (simulateHand(deckCopy, hand, [...communityCards], opponents)) {
        wins++;
      }
    }
  
    return wins / iterations;
  };
  

  const handleCalculateOdds = () => {
    // Pass in your hand and community cards here
    const calculatedOdds = calculateOdds();
    setOdds(calculatedOdds);
  };

  return (
    <div>
      <button onClick={handleCalculateOdds}>Calculate Odds</button>
      <p>Odds: {odds}</p>
    </div>
  );
};
export default OddsCalculator