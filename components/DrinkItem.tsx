
import React from 'react';
import { Drink } from '../types';
import GlassIcon from './GlassIcon';

interface DrinkItemProps {
  drink: Drink;
}

const DrinkItem: React.FC<DrinkItemProps> = ({ drink }) => {
  return (
    <div className="mb-14 group flex gap-6 fade-in">
      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-[#ff6b6b] group-hover:scale-110 transition-transform duration-300">
        <GlassIcon type={drink.glassware} className="w-10 h-10" />
      </div>
      <div className="flex-1">
        <h3 className="text-3xl md:text-4xl heading-font text-[#2d2d2d] leading-tight mb-3">
          {drink.name}
        </h3>
        <p className="mono-font text-xs md:text-sm font-bold uppercase tracking-widest text-[#ff6b6b] mb-3">
          {drink.ingredients}
        </p>
        <p className="text-[#555] text-base md:text-xl leading-relaxed font-light">
          — {drink.description}
        </p>
      </div>
    </div>
  );
};

export default DrinkItem;
