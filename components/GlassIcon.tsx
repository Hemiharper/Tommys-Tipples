
import React from 'react';
import { Glassware } from '../types';

interface GlassIconProps {
  type: Glassware;
  className?: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({ type, className = "" }) => {
  const color = "currentColor";
  
  switch (type) {
    case 'short':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className}>
          <path d="M6 4h12l-1 15H7L6 4z" />
          <path d="M6 7h12M12 4v3" opacity="0.5" />
        </svg>
      );
    case 'tall':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className}>
          <path d="M7 3h10v18H7V3z" />
          <path d="M7 6h10M12 3v3" opacity="0.5" />
          <path d="M10 21l-1-4h6l-1 4" opacity="0.3" />
        </svg>
      );
    case 'cocktail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className}>
          <path d="M5 5l7 7 7-7H5z" />
          <path d="M12 12v7" />
          <path d="M9 19h6" />
        </svg>
      );
    case 'tiki':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className}>
          <rect x="7" y="4" width="10" height="16" rx="2" />
          <path d="M10 8h4M10 12h4M10 16h4" opacity="0.5" />
          <circle cx="10" cy="10" r="0.5" fill={color} />
          <circle cx="14" cy="10" r="0.5" fill={color} />
        </svg>
      );
    case 'wine':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" className={className}>
          <path d="M7 8a5 5 0 0110 0v2a5 5 0 01-10 0V8z" />
          <path d="M12 15v5" />
          <path d="M9 20h6" />
        </svg>
      );
    default:
      return null;
  }
};

export default GlassIcon;
