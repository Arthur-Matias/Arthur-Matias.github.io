import colors from 'tailwindcss/colors';
// Assuming these are defined somewhere in your code
type MainColors = "rose" | "pink" | "fuchsia" | "purple" | "violet" | 
                 "indigo" | "blue" | "sky" | "cyan" | "teal" | 
                 "emerald" | "green" | "lime" | "yellow" | "amber" | 
                 "orange" | "red";

type GrayscaleColors = "slate" | "gray" | "zinc" | "neutral" | "stone";

type AllColors = MainColors | GrayscaleColors; // Create a combined type

const mainColors: MainColors[] = [
  "rose" , "pink" , "fuchsia" , "purple" , "violet" , 
  "indigo" , "blue" , "sky" , "cyan" , "teal" , 
  "emerald" , "green" , "lime" , "yellow" , "amber" , 
  "orange" , "red"
]
const grayscaleColors: GrayscaleColors[] = [
  "slate" , "gray" , "zinc" , "neutral" , "stone"
]
const allColors: AllColors[] = [
  "rose", "pink", "fuchsia", "purple", "violet", 
  "indigo", "blue", "sky", "cyan", "teal", 
  "emerald", "green", "lime", "yellow", "amber", 
  "orange", "red", "slate", "gray", "zinc", "neutral", "stone"
];

type Shade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

/**
 * 
 * @param shade The color intensity
 * @returns the desired color with the desired intensity as a Hex string
 */
const colorsMap = (shade: Shade) => Object.fromEntries(
  allColors.map(color => [color, colors[color][shade]])
);

export { allColors, colorsMap, mainColors, grayscaleColors };
export type {MainColors, GrayscaleColors};
