import React from 'react';

const BankrollManagementTips = () => {
  const tips = [
    'Tip 1: Play within your limits and avoid games with high stakes if your bankroll cannot support it.',
    'Tip 2: Keep a fixed percentage of your bankroll for each buy-in, such as 1-2% for cash games and 2-5% for tournaments.',
    'Tip 3: Regularly review your game performance and adjust your bankroll management strategy accordingly.',
  ];
  

  return (
    <div>
      <h2>Bankroll Management Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};
export default BankrollManagementTips;
