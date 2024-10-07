import { useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import ColorSelector from "./ColorSelector";

export default function Logo() {
    const { state, toggleDarkMode } = useGlobalContext();
    const [colorMenuVisible, setColorMenuVisible] = useState(false);
    function handleClick(e: MouseEvent){
        if(colorMenuVisible){
            if(
                e.pageX > 100 &&
                e.pageY > 100
            ){
                setColorMenuVisible(false);
            }
            
        }
    }
    function toggleColorMenu() {
        setColorMenuVisible((prev) => !prev);
    }
    useEffect(()=>{
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    })
    return (
        <div className="relative">
            <div className="w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 51" className="cursor-pointer" onClick={toggleColorMenu}>
                    <path id="topbarLogo" d="M48,41.971,42.841,51a27.963,27.963,0,0,0-18.031-5.259A28.249,28.249,0,0,0,10.465,51L19.6,35.075a17.553,17.553,0,0,1,13.118,1.637c-2.358-4.068-4.667-8.186-7.026-12.254-.54-.992-1.13-1.935-1.67-2.927L7.124,51H5.208L0,41.971,24.025,0Z" fill="currentColor"></path>
                </svg>
            </div>
            {colorMenuVisible && (
                <div className="absolute mt-4 py-8 px-20 rounded-3xl dark:bg-gray-800 bg-white">
                    <ColorSelector />
                    <button type="button" onClick={toggleDarkMode}>toggle</button>
                </div>
            )}
        </div>
    );
}
