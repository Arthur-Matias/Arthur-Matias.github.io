import { useGlobalContext } from "./GlobalContext";
import { allColors, colorsMap } from './tailwindColors';

export default function ColorSelector() {
  const { changeMainColor } = useGlobalContext();

  return (
    <div className="flex space-x-2">
      {allColors.map(color => (
        <div 
          key={color}
          className="h-4 w-4 rounded-full cursor-pointer transition-transform transform hover:scale-105"
          style={{ backgroundColor: colorsMap("500")[color] }} // Use the color from the map
          onClick={() => changeMainColor(color)}
        />
      ))}
    </div>
  );
}
