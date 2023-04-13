import React, { useState } from 'react';
import { calculateHandStrength } from './utils';

const HandHistoryAnalyzer = () => {
  const [handHistory, setHandHistory] = useState([]);
  const [analysis, setAnalysis] = useState('');

  const analyzeHandHistory = (handHistory) => {
    const handStrengths = handHistory.map((hand) => calculateHandStrength(hand));
  
    const averageHandStrength = handStrengths.reduce((sum, strength) => sum + strength, 0) / handStrengths.length;
  
    const strongHands = handStrengths.filter((strength) => strength >= 10).length;
    const mediumHands = handStrengths.filter((strength) => strength >= 7 && strength < 10).length;
    const weakHands = handStrengths.filter((strength) => strength < 7).length;
  
    return {
      averageHandStrength,
      strongHands,
      mediumHands,
      weakHands,
    };
  };
  

  const handleAnalyzeHandHistory = () => {
    const result = analyzeHandHistory(handHistory);
    setAnalysis(result);
  };

  return (
    <div>
      <button onClick={handleAnalyzeHandHistory}>Analyze Hand History</button>
      <p>{analysis}</p>
    </div>
  );
};
export default HandHistoryAnalyzer
