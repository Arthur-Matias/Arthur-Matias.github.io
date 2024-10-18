
interface TextProps{
    text: string;
    size: "sm" | "md" | "lg" | "xl"
    mainColor: boolean;
    weight: "thin" | "regular" | "bold" | "black";
    font: "title" | "display";
}

export default function Text({text, size, mainColor, weight, font}: TextProps){
    return (
        <div className={`select-none font-${font}
            ${ size === "xl"?"text-5xl sm:text-8xl":size === "lg"?"text-3xl sm:text-5xl":size === "md"?"text-base sm:text-xl":"text-sm sm:text-base"} 
            ${mainColor?"text-main":"text-accent"} 
            ${ weight === "black"?"font-black":weight === "bold"?"font-bold":weight === "regular"?"font-normal":"font-thin" } `}
            >
                {text}
            </div>
    )
}