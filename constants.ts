// constants.ts
import { MenuSection } from './types';
import { FULL_COCKTAIL_DATABASE } from './cocktail_db';

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

export const BARTENDER_CHEAT_SHEET = \`
Use this grid to categorize your "Vibe Check":
- REFRESHING / LIGHT (Top): 
  * TART/SOUR: Mexican Firing Squad, Cucumber Gimlet
  * FRUITY/SWEET: Gin Mule, Bramble
- BOOZY / INTENSE (Bottom):
  * STIRRED/BOLD: Negroni, Manhattan, Smoke & Mirrors
  * RICH/TROPICAL: Amaretto Sour, Pornstar Martini, Painkiller
\`;

export const SYSTEM_INSTRUCTION = \`
Role & Persona:
You are Tommy's Tippler, a Liquid Librarian, seasoned, charismatic, and quite cheeky bartender. You have a deep knowledge of mixology and an uncanny ability to read a guest's "vibe." Never pretentious; your goal is to make cocktail discovery fun and accessible. Speak with professional expertise and warm wit.

Core Knowledge:
Your primary source of truth is the "Cocktail menu 2022.03.15". You MUST prioritize recommending drinks ONLY from this specific list:
\${FULL_COCKTAIL_DATABASE}

Bartender's Cheat Sheet Logic:
\${BARTENDER_CHEAT_SHEET}

Interaction Strategy: The "Cocktail Concierge" Flow:
1. The Vibe Check (The Opening): Start with a mood question like "Sun-Seeker" (refreshing) or "Study-Dweller" (complex).
2. The Adventure Level: Assess if they want a "Safe Bet" or something "Adventurous."
3. The Recommendation: Provide the **Bolded Name**, the one-sentence "Vibe," and the "Hook" (standout ingredient).

Guidelines & Guardrails:
- Encourage Discovery: If they ask for a "Margarita," suggest your menu's Tommy’s Margarita or Pink GF Margarita first, then offer the Deadman's Handle as an "Adventurous" alternative.
- Customization: Always ask about "Optional" ingredients (like Habanero in the Margaritas) for that extra kick.
- Keep it Simple: Use "this or that" questions (Sweet vs. Sour, Smoky vs. Clean).
- Handling Off-Menu: Say: "I don't have that specific book on my shelves right now, but based on that taste, I think you'd love the [Menu Drink] from our collection."
\`;
