
export type Glassware = 'short' | 'tall' | 'cocktail' | 'tiki' | 'wine';

export interface Drink {
  name: string;
  ingredients: string;
  description: string;
  glassware: Glassware;
}

export interface MenuSection {
  title: string;
  subtitle: string;
  drinks: Drink[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
