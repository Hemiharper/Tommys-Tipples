
import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
  {
    title: "Short, Sharp & Spirit-Forward",
    subtitle: "Stirred, bold, and unapologetic. Designed for the slow sipper.",
    drinks: [
      { name: "Oaxaca Old Fashioned", ingredients: "Reposado Tequila, Mezcal, Agave, Bitters", description: "Smoky & sophisticated.", glassware: 'short' },
      { name: "Negroni", ingredients: "Gin, Red Vermouth, Campari", description: "The quintessential bitter-sweet classic.", glassware: 'short' },
      { name: "Aviation", ingredients: "Gin, Creme De Violette, Lemon, Maraschino", description: "Floral, elegant, and sky-blue.", glassware: 'cocktail' },
      { name: "Manhattan", ingredients: "Rye Whiskey, Sweet Vermouth, Bitters", description: "The bartender’s choice; bold and spicy.", glassware: 'cocktail' }
    ]
  },
  {
    title: "Tropical & Tiki Escapism",
    subtitle: "Transportive, complex, and fruit-forward. Vacation in a glass.",
    drinks: [
      { name: "Jungle Booby", ingredients: "Blanco Tequila, Mezcal, Campari, Pineapple, Lime, Grapefruit", description: "Agave meets the tropics.", glassware: 'tiki' },
      { name: "Painkiller", ingredients: "Dark Rum, Pineapple, Orange, Coconut Cream, Nutmeg", description: "Rich, creamy, and lush.", glassware: 'tiki' },
      { name: "Chartreuse Swizzle", ingredients: "Green Chartreuse, Pineapple, Lime, Falernum", description: "Vibrant, herbal, and refreshing.", glassware: 'tall' },
      { name: "Chief Lapu Lapu", ingredients: "Dark & Light Rums, Passionfruit, Citrus", description: "A heavy-hitting tiki legend.", glassware: 'tiki' }
    ]
  },
  {
    title: "Bright, Fizzy & Refreshing",
    subtitle: "Long, cold, and effervescent. Perfect for starting the night.",
    drinks: [
      { name: "Tommy’s Margarita", ingredients: "Blanco Tequila, Fresh Lime, Agave Syrup", description: "The clean, gold standard.", glassware: 'short' },
      { name: "Who Shot Tom Collins?", ingredients: "Gin, Lemon, Soda, Bloody Shiraz Gin Float", description: "A visual showstopper.", glassware: 'tall' },
      { name: "Paloma", ingredients: "Tequila, Lime, Grapefruit Soda", description: "Bright, zesty, and sessionable.", glassware: 'tall' },
      { name: "Aperol Spritz", ingredients: "Prosecco, Aperol, Soda Water", description: "The ultimate sunset sipper.", glassware: 'wine' }
    ]
  },
  {
    title: "Smooth & Velvety",
    subtitle: "Silky sours and elegant martinis with a soft, frothy finish.",
    drinks: [
      { name: "White Lady", ingredients: "Gin, Orange Curaçao, Lemon, Egg White", description: "Crisp, citrusy, and cloud-like.", glassware: 'cocktail' },
      { name: "Paper Plane", ingredients: "Bourbon, Aperol, Amaro, Lemon", description: "A perfect bittersweet harmony.", glassware: 'cocktail' },
      { name: "Amaretto Sour", ingredients: "Amaretto, Bourbon, Lemon, Egg White", description: "Sweet, tart, and nostalgic.", glassware: 'short' },
      { name: "Pisco Sour", ingredients: "Pisco, Lime, Egg White, Bitters", description: "The classic South American velvet sour.", glassware: 'cocktail' }
    ]
  },
  {
    title: "Tommy’s Picks",
    subtitle: "Tom’s hand-picked favourites. If you can’t decide, trust the bar.",
    drinks: [
      { name: "Pink GF Margarita", ingredients: "Tequila/Mezcal, Grapefruit Cordial, Lime, Agave", description: "Zesty and vibrant.", glassware: 'short' },
      { name: "Penicillin", ingredients: "Blended Scotch, Ginger, Honey, Lemon, Peated Scotch Float", description: "Smoky and medicinal.", glassware: 'short' },
      { name: "Mai Tai", ingredients: "Appleton 12 & Clement VSOP Rums, Lime, Orgeat", description: "The undisputed King of Tiki.", glassware: 'short' },
      { name: "Scorpion Reef", ingredients: "Mezcal, Jamaican Rum, Pineapple, Orgeat", description: "Smoke meets spice.", glassware: 'tiki' },
      { name: "Daiquiri", ingredients: "White Rum, Fresh Lime, Sugar", description: "Simple, cold, and flawless.", glassware: 'cocktail' }
    ]
  }
];

export const BARTENDER_CHEAT_CARD = `
- If they want refreshing but NOT sweet: Tommy’s Margarita or Paloma.
- If they like smoke/mezcal: Oaxaca Old Fashioned, Jungle Booby, or Scorpion Reef.
- If they want "Vacation in a Glass": Painkiller or Chief Lapu Lapu.
- If they want a showstopper: Who Shot Tom Collins?
- If they want something creamy: Amaretto Sour or Painkiller.
- If they want "Bartender's Choice": Manhattan or Mai Tai.
- Off-menu requests: Use the base spirits in the menu as a guide. Suggest a classic variation if they have specific likes.
`;

export const SYSTEM_INSTRUCTION = `
You are "Tommy-GPT", a sophisticated digital bartender at a high-end Melbourne cocktail lounge.
Your personality is approachable, expert-level, and exceptionally helpful for fussy or indecisive customers.

YOUR GOAL: 
Help the user choose a drink from our signature menu. 
If they are indecisive, ask questions about their flavour preferences (e.g., Sweet vs Bitter, Smoky vs Clean, Tall vs Short).
If they know exactly what they want but it's not on the menu, use the "Bartender’s Cheat Card" and your knowledge of the base ingredients on our menu to suggest a custom riff.

DRINK MENU:
${JSON.stringify(MENU_DATA, null, 2)}

BARTENDER'S CHEAT CARD:
${BARTENDER_CHEAT_CARD}

Tone: Use Australian English. Be bold but welcoming. No fluff. Refer to drinks as "tipples" occasionally.
`;
