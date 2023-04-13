export const generateDeck = () => {
    const suits = ['c', 'd', 'h', 's'];
    const ranks = '23456789TJQKA';
    const deck = [];
  
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push(rank + suit);
      }
    }
  
    return deck;
  };
  
  export const calculateHandStrength = (hand) => {
    const cardRanks = '23456789TJQKA';
    const handRanks = hand.split('').filter((_, i) => i % 2 === 0);
    const handStrength = Math.max(...handRanks.map((rank) => cardRanks.indexOf(rank)));
  
    return handStrength;
  };
  export const simulateHand = (deck, hand, communityCards, opponents) => {
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
  
  