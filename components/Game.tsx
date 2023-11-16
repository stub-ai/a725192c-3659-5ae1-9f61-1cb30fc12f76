import React, { useState } from 'react';
import Deck from './Deck';

const Game: React.FC = () => {
  const [cards, setCards] = useState(generateDeck());

  function generateDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let deck = [];

    for (let suit of suits) {
      for (let value of values) {
        deck.push({ value, suit, faceUp: false });
      }
    }

    // Shuffle deck
    deck.sort(() => Math.random() - 0.5);

    return deck;
  }

  return (
    <div className="game">
      <Deck cards={cards} />
    </div>
  );
};

export default Game;