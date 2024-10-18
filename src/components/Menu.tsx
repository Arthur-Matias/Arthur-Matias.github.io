import { useRef, useEffect, useState } from "react";
import Canvas from "./FlowText/Canvas";
import { useGlobalContext } from "./GlobalContext";
import { useNavigate } from "react-router-dom";
import { Page } from "../types";

export default function Menu() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    
    const [isVisible, setIsVisible] = useState(false);
    const [hovered, setHovered] = useState<Page | null>(null); // State for hover effect
    
    const { state, changeCurrentPage, toggleMenu } = useGlobalContext();
    const navigate = useNavigate();

    const handleClickOrTouch = (target: Page) => {
        navigate(`/${target === "Home" ? "" : target.toLowerCase()}`);
        changeCurrentPage(target);
        toggleMenu();
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // Set to visible after a short delay
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = (target: Page) => {
        setHovered(target); // Set hovered state
        setTimeout(()=>{
            changeCurrentPage(target)
            setHovered(null);
        }, 100)
    };

    const handleMouseLeave = () => {
        setHovered(null); // Reset hovered state
    };
    
    return (
        <div className={`fixed left-0 top-0 h-screen w-screen flex dark:bg-gray-950 bg-slate-200 backdrop-blur-lg z-10 transform transition-transform duration-200 ${isVisible?"-translate-y-0 opacity-100":"-translate-y-96 opacity-0"}`}>
            <div className={`absolute left-0 top-0 h-screen w-screen z-0 flex flex-col`}>
                <div
                    className={`flex-1 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${hovered === "Home" ? "opacity-0" : "opacity-100"}`}
                    ref={homeRef}
                    onMouseOver={() => handleMouseEnter("Home")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClickOrTouch("Home")}
                    onTouchEnd={() => handleClickOrTouch("Home")}
                >
                    <Canvas parentRef={homeRef} text={"Home"} shouldAnimate={state.currentPage === "Home"} />
                </div>
                {/* <div
                    className={`flex-1 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${hovered === "About" ? "opacity-0" : "opacity-100"}`}
                    ref={aboutRef}
                    onMouseOver={() => handleMouseEnter("About")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClickOrTouch("About")}
                    onTouchEnd={() => handleClickOrTouch("About")}
                >
                    <Canvas parentRef={aboutRef} text={"About"} shouldAnimate={state.currentPage === "About"} />
                </div> */}
                <div
                    className={`flex-1 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${hovered === "Contact" ? "opacity-0" : "opacity-100"}`}
                    ref={contactRef}
                    onMouseOver={() => handleMouseEnter("Contact")}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClickOrTouch("Contact")}
                    onTouchEnd={() => handleClickOrTouch("Contact")}
                >
                    <Canvas parentRef={contactRef} text={"Contact"} shouldAnimate={state.currentPage === "Contact"} />
                </div>
                {/* <div className="absolute p-5 min-h-10 min-w-10 right-10 top-10 cursor-not-allowed" onClick={closeMenu}>
                    <div className="bg-red-600 w-8 h-1 -rotate-45"></div>
                    <div className="-mt-1 bg-red-600 w-8 h-1 rotate-45"></div>
                </div> */}
            </div>
        </div>
    );
}
