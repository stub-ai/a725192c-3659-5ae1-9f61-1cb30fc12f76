import React from 'react';
import Card from './Card';

interface DeckProps {
  cards: { value: string; suit: string; faceUp: boolean }[];
}

const Deck: React.FC<DeckProps> = ({ cards }) => {
  return (
    <div className="deck">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Deck;