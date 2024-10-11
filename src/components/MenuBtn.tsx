import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";

export default function MenuBtn(){
    
    const { toggleMenu } = useGlobalContext();
    const [isHovering, setHovering] = useState(false);
    const [finishedAnimation, setAnimationFinished] = useState(false)
    function handleMouseEnter(){
        setHovering(true);

        const timeout = setTimeout(()=>{
            setAnimationFinished(true);
            return clearTimeout(timeout);
        }, 200);
    }
    function handleMouseLeave(){
        // if(finishedAnimation)
        setAnimationFinished(false);
        const timeout = setTimeout(()=>{
            setHovering(false);
            return clearTimeout(timeout);
        }, 200)
    }
    return (
        <div className="cursor-pointer" onClick={toggleMenu} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
            <div className={`w-10 h-1.5 dark:bg-white bg-black rounded-md mb-1 transition-transform duration-200${isHovering?"":""}`} />
            <div className={`w-10 h-1.5 dark:bg-white bg-black rounded-md mb-1 transition-all duration-100 ${isHovering?"translate-x-full opacity-0":""} ${finishedAnimation && isHovering? "hidden":""}`} />
            <div className={`w-10 h-1.5 dark:bg-white bg-black rounded-md transition-transform duration-200${isHovering?"":""}`} />
        </div>
    )
}