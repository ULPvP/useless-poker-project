import React, { useState } from 'react';

const PotOddsCalculator = () => {
  const [potOdds, setPotOdds] = useState(0);

  const calculatePotOdds = (potSize, betAmount) => {
    return betAmount / (potSize + betAmount);
  };
  

  const handleCalculatePotOdds = () => {
    // Pass in the current pot size and bet amount here
    const calculatedPotOdds = calculatePotOdds();
    setPotOdds(calculatedPotOdds);
  };

  return (
    <div>
      <button onClick={handleCalculatePotOdds}>Calculate Pot Odds</button>
      <p>Pot Odds: {potOdds}</p>
    </div>
  );
};
export default PotOddsCalculator
