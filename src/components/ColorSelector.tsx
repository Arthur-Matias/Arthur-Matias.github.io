// import { useGlobalContext } from "./GlobalContext";
import { colorsMap, mainColors, MainColors } from './tailwindColors';
import { useGlobalContext } from './GlobalContext';

export default function ColorSelector() {
  const { changeColors } = useGlobalContext();

  return (
    <div className="flex space-x-2">
      {mainColors.map((color) => (
        <div 
          key={color}
          className="h-4 w-4 rounded-full cursor-pointer transition-transform transform hover:scale-105"
          style={{ backgroundColor: colorsMap("500")[color] }} // Use the color from the map
          onClick={() => changeColors({ main: color })} // Type assertion here
        />
      ))}
    </div>
  );
}
