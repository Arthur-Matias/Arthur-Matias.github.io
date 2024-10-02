import { useGlobalContext } from "./GlobalContext";

export default function MenuBtn(){
    
    const { toggleMenu } = useGlobalContext();

    return (
        <div className="cursor-pointer" onClick={toggleMenu}>
            <div className="w-10 h-1.5 dark:bg-white bg-black rounded-md mb-1"></div>
            <div className="w-10 h-1.5 dark:bg-white bg-black rounded-md mb-1"></div>
            <div className="w-10 h-1.5 dark:bg-white bg-black rounded-md "></div>
        </div>
    )
}