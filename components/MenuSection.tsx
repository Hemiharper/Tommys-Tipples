
import React from 'react';
import { MenuSection as MenuSectionType } from '../types';
import DrinkItem from './DrinkItem';

interface MenuSectionProps {
  section: MenuSectionType;
}

const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <section className="mb-32">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl heading-font text-[#00d084] mb-4 leading-tight">
          {section.title}
        </h2>
        <div className="h-0.5 w-24 bg-[#ff6b6b] mb-6"></div>
        <p className="mono-font text-xs md:text-sm font-bold text-[#ff6b6b] uppercase tracking-[0.3em]">
          {section.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
        {section.drinks.map((drink, idx) => (
          <DrinkItem key={idx} drink={drink} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
