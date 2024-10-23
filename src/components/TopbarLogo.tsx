import { useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import ColorSelector from "./ColorSelector";
import getLogo from "../scripts/getLogo";
// import { useGlobalContext } from "./useGlobalCtx";

export default function TopbarLogo() {
    const { state, toggleDarkMode } = useGlobalContext();
    const [colorMenuVisible, setColorMenuVisible] = useState(false);
    const [isDark, setIsDark] = useState(state.darkTheme);
    // function handleClick(e: MouseEvent) {
    //     console.log(e.pageX, e.pageY)
    //     if (colorMenuVisible && (!(e.pageX < 384) && !(e.pageY < 430)) && !isMobile) {
    //         // return
    //     }else{
    //         setColorMenuVisible(false);
    //     }

    // }
    function toggleColorMenu() {
        setTimeout(() => {
            setColorMenuVisible((prev) => !prev)
        }, 100)
    }
    useEffect(() => {
        // window.addEventListener('click', handleClick);

        return () => {
            // window.removeEventListener('click', handleClick);
        };
    })

    function handleThemeToggle() {

        setIsDark(state.darkTheme);

        setTimeout(() => {
            toggleDarkMode()
        }, 300)
        // console.log(state.colors.main)        
    }
    return (
        <div className="relative">
            <button type="button" aria-description="Open theme settings" aria-label="Open theme settings" aria-describedby="buttonDescription" className="w-8 h-10" onClick={toggleColorMenu}>
                <div className="w-8 h-full cursor-pointer" dangerouslySetInnerHTML={{ __html: getLogo("var(--color-main)") }} />
            </button>
            <span id="buttonDescription" style={{display: "none"}}>This button opens the settings menu.</span>
            {colorMenuVisible && (
                <div  onClick={toggleColorMenu} className="absolute flex flex-col items-center justify-center -ml-12 md:-ml-10 -mt-12 md:mt-4 py-8 px-5 w-screen h-screen md:min-w-96 rounded-3xl bg-white dark:bg-gray-900 bg-opacity-35 dark:bg-opacity-35 backdrop-blur-lg dark:backdrop-blur-lg">
                    <ColorSelector />
                    <button type="button" className="relative mt-5" onClick={handleThemeToggle}>
                        <div className={`w-22 h-8 background-bg rounded-full flex justify-center items-center ${isDark ? "pl-10" : "pr-6"}`}>
                            <div className={`transition-all duration-100`} >{isDark?"dark":"light"}</div>
                        </div>
                        <div className={`absolute -top-1 h-10 w-10 rounded-full background-accent translate-x-0 transition-all duration-200 ${isDark ? "" : "translate-x-8"}`}></div>
                    </button>
                </div>
            )}
        </div>
    );
}
