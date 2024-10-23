import { ReactNode, useState } from "react";
import Text from "./Text";

interface CustomBtn{
    children?: ReactNode
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>)=>void;
    text?: string;
    btnType: "submit" | "reset" | "button" | undefined;
    ariaDescription: string
}

export default function CustomButton({
    children,
    handleClick,
    text,
    btnType,
    ariaDescription
}: CustomBtn){

    const [hover, setHover] = useState(false)

    if(!text && !children) throw new Error("no text nor children was provided");

    return (
    <>
        <button onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} type={btnType} onClick={handleClick} className="flex items-center justify-center custom-btn rounded px-5 py-3 cursor-pointer h-full w-full transition ease-in-out duration-200">
            {children?children:<Text text={text?text:""} font="display" mainColor={hover} size="sm" weight="regular" />}
        </button>
        <span id="buttonDescription" style={{display: "none"}}>{ariaDescription}</span>
    </>
    )
}