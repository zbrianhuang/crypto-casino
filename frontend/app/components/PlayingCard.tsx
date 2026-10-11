// import { useState } from "react";
import Image from 'next/image'

export type CardValue = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
export type CardSuit = "Spade" | "Heart" | "Club" | "Diamond";
export type CardColor = "Red" | "Black";

type Card = {
  name: string;

  glyph: string; 
  image?: string; 

  value: CardValue;
  suit: CardSuit;
  color: CardColor;
};

const CARD_VALUE_ICON_MAP: Record<CardValue, string> = {
  "J": '/icon/jack.png',
  "Q": '/icon/queen.png',
  "K": '/icon/king.png',
};

const CARD_SUIT_GLYPH_MAP: Record<CardSuit, string> = {
  "Spade": '/icon/spade.png',
  "Heart": '/icon/heart.png',
  "Club": '/icon/club.png',
  "Diamond": '/icon/diamond.png'
};

/* Actual Programatic Card Generation */ 

export default function PlayingCard(
  { value, suit, color }: 
  { value: CardValue, suit: CardSuit, color: CardColor }
) {
  const cardDescription = value + suit + color;
  const imagePath = CARD_VALUE_ICON_MAP[value] || (CARD_SUIT_GLYPH_MAP[suit]);
  const colorHex = (color == "RED") ? "text-red-600" : "text-black";

  return (
    <div className={`relative w-64 h-96 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden flex flex-col justify-between p-4 select-none ${colorHex}`}>
      
      {/* Top Header Row (Value Left, Glyph Right) */}
      <div className="flex justify-between items-start w-full">
        {/* Top left = CARD VALUE */}
        <span className="text-5xl font-black font-serif leading-none tracking-tighter">
          {value}
        </span>
        
        {/* Top right = CARD GLYPH */}
        <span className="text-4xl font-serif leading-none">
          {suit === 'Spade' && '♠'}
          {suit === 'Heart' && '♥'}
          {suit === 'Club' && '♣'}
          {suit === 'Diamond' && '♦'}
        </span>
      </div>

      {/* Bottom Half = Img */}
      <div className="w-full h-3/4 mt-auto relative flex items-center justify-center overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
        <Image 
          className="w-full h-full object-contain p-2" 
          width={500} 
          height={500}
          src={imagePath} 
          alt={cardDescription}
        />
      </div>

    </div>
  );
}

