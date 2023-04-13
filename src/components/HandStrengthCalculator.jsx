import React, { useState } from 'react';

export default function HandStrengthCalculator() {
  console.log('Rendering HandStrengthCalculator component'); // add this line
  const [hand, setHand] = useState('');
  const [handStrength, setHandStrength] = useState(null);


  const calculateHandStrength = (hand) => {
    // Assuming hand is a string in format "AsKd" (Ace of spades, King of diamonds)
    const cardRanks = '23456789TJQKA';
    const handRanks = hand.split('').filter((_, i) => i % 2 === 0);
    const handStrength = Math.max(...handRanks.map((rank) => cardRanks.indexOf(rank)));
  
    return handStrength;
  };
  
  const handleChange = (event) => {
    setHand(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const calculatedHandStrength = calculateHandStrength(hand);
    setHandStrength(calculatedHandStrength);
  };

  return (
    <div>
      <p>This is the HandStrengthCalculator component</p>


      <form onSubmit={handleSubmit}>
        <input type="text" value={hand} onChange={handleChange} />
        <button type="submit">Calculate Hand Strength</button>
      </form>
      {handStrength !== null && <p>Hand Strength: {handStrength}</p>}
    </div>
  );
};


