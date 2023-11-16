import React from 'react';

interface CardProps {
  value: string;
  suit: string;
  faceUp: boolean;
}

const Card: React.FC<CardProps> = ({ value, suit, faceUp }) => {
  return (
    <div className={`card ${faceUp ? 'face-up' : ''}`}>
      <div className="card-value">{value}</div>
      <div className="card-suit">{suit}</div>
    </div>
  );
};

export default Card;