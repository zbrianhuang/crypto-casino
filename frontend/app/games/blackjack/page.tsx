
import React from 'react';
import PlayingCard, { CardValue, CardSuit, CardColor } from "../../components/PlayingCard.tsx";

// Runtime arrays because the types don't play nicely here
const SUITS: CardSuit[] = ['Spade', 'Heart', 'Club', 'Diamond'];
const VALUES: CardValue[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export default function BlackjackPage() {
  const fullDeck = SUITS.flatMap((suit) =>
    VALUES.map((value) => {
      const color = (suit === 'Heart' || suit === 'Diamond') ? 'Red' : 'Black';
      return { value, suit, color };
    })
  );

  return (
    <div className="min-h-screen bg-slate-900 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-white mb-8 tracking-wide font-sans">
        Blackjack Card Deck Display
      </h1>
      
      {/* Responsive layout with even spacing */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">
        {fullDeck.map((card) => (
          <PlayingCard 
            key={`${card.value}-${card.suit}`}
            value={card.value}
            suit={card.suit}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}
