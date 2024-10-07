import colors from 'tailwindcss/colors';

export type Colors =   "rose" | 
                "pink" | 
                "fuchsia" | 
                "purple" | 
                "violet" | 
                "indigo" | 
                "blue" | 
                "sky" | 
                "cyan" | 
                "teal" | 
                "emerald" | 
                "green" | 
                "lime" | 
                "yellow" | 
                "amber" | 
                "orange" | 
                "red" | 
                "stone" | 
                "neutral" | 
                "zinc" | 
                "gray" | 
                "slate";

const allColors: Colors[] = [
  "rose", "pink", "fuchsia", "purple", "violet", 
  "indigo", "blue", "sky", "cyan", "teal", 
  "emerald", "green", "lime", "yellow", "amber", 
  "orange", "red", "stone", "neutral", "zinc", 
  "gray", "slate"
];

type Shade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';


const colorsMap = (shade: Shade) => Object.fromEntries(
  allColors.map(color => [color, colors[color][shade]])
);

export { allColors, colorsMap };
