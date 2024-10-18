import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";

export default function MenuBtn() {
    const { state, toggleMenu } = useGlobalContext();
    const [isHovering, setHovering] = useState(false);

    function handleMouseEnter() {
        setHovering(true);
    }

    function handleMouseLeave() {
        setHovering(false);
    }
    
    return (
        <div className="cursor-pointer h-full flex flex-col justify-center" onClick={toggleMenu} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className={`w-10 h-1.5 rounded-md transition-all duration-200 ${isHovering && !state.menuOpen? "mb-0" : "mb-1"} ${state.menuOpen?"absolute m-0 translate-y-1 rotate-45 bg-red-600 dark:bg-red":"dark:bg-white bg-black"}`} />
            <div className={`w-10 h-1.5 rounded-md transition-all duration-100 mb-1 ${isHovering ? "translate-x-full opacity-0" : ""}  ${state.menuOpen?"hidden":"dark:bg-white bg-black"}`} />
            <div className={`w-10 h-1.5 rounded-md transition-all duration-200 ${isHovering && !state.menuOpen? "mt-0" : ""} ${state.menuOpen?" m-0 -rotate-45 bg-red-600 dark:bg-red":"dark:bg-white bg-black"}`} />
        </div>
    );
}
