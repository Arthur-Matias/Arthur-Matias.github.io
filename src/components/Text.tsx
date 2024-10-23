interface TextProps {
    text: string;
    size: "sm" | "md" | "lg" | "xl";
    weight: "thin" | "regular" | "bold" | "black";
    font: "title" | "display";
    mainColor?: boolean;
    align?: "start" | "end" | "center" | "left" | "right"
}

export default function Text({ text, size, mainColor, weight, font, align }: TextProps) {
    const sizeClasses = 
        size === "xl" ? "text-5xl sm:text-8xl" :
        size === "lg" ? "text-3xl sm:text-5xl" :
        size === "md" ? "text-base sm:text-xl" :
        "text-sm sm:text-base";

    const colorClass = mainColor ? "text-main" : "text-accent";
    const alignClass = 
        align === "center"? "text-center" :
        align === "end" ? "text-end" :
        align === "left"? "text-left":
        align === "right" ? "text-right" :
        align === "start" ? "text-start": 
        ""
    ;
    const weightClass = 
        weight === "black" ? "font-black" :
        weight === "bold" ? "font-bold" :
        weight === "regular" ? "font-normal" :
        "font-thin";

    const fontClass = font === "title" ? "font-title" : "font-display";

    return (
        <div className={`select-none ${alignClass} ${sizeClasses} ${colorClass} ${weightClass} ${fontClass}`}>
            {text}
        </div>
    );
}
