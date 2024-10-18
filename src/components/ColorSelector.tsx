// import { useGlobalContext } from "./GlobalContext";
import { colorsMap, mainColors, MainColors } from '../scripts/tailwindColors';
import { useGlobalContext } from './GlobalContext';

export default function ColorSelector() {
  const { state, changeColors } = useGlobalContext();
  function handleColorChange(color: MainColors){
    localStorage.setItem("preferredColor", color)
    changeColors({ main: color, accent: state.colors.accent, bg: state.colors.bg })
  }
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 overflow-auto gap-5 ">
      {mainColors.map((color) => (
        <div 
          key={color}
          className="px-5 py-3 rounded cursor-pointer flex items-center justify-center"
          style={{ backgroundColor: colorsMap("500")[color] }} // Use the color from the map
          onClick={() => handleColorChange(color)} // Type assertion here
        >
          {color}
        </div>
      ))}
    </div>
  );
}
