import React, { useState } from 'react';
import { calculateHandStrength } from './utils';

const SuggestedActions = () => {
  const [action, setAction] = useState('');

  const suggestAction = (hand, position) => {
    const handStrength = calculateHandStrength(hand);
  
    if (handStrength >= 10) {
      return 'Raise';
    } else if (handStrength >= 7 && position === 'late') {
      return 'Call';
    } else {
      return 'Fold';
    }
  };
  

  const handleSuggestAction = () => {
    // Pass in your hand and position here
    const suggestedAction = suggestAction();
    setAction(suggestedAction);
  };

  return (
    <div>
      <button onClick={handleSuggestAction}>Suggest Action</button>
      <p>Action: {action}</p>
    </div>
  );
};
export default SuggestedActions