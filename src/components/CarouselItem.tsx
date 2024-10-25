import { useState } from "react";
import { iProject } from "../types";
import Text from "./Text";

const CarouselItem: React.FC<{ item: iProject }> = ({ item }) => {
    const [isMouseOver, setMouseOver] = useState(false);

    return (
        <a 
            className="flex h-full flex-col w-72 overflow-hidden"  // Fixed width for the entire item
            href={item.link} 
            target="_blank"
            onMouseOver={() => setMouseOver(true)} 
            onMouseOut={() => setMouseOver(false)}
        >
            <div 
                className={`h-96 bg-cover transition-transform duration-200 bg-center rounded-t-lg transform ${isMouseOver ? "scale-110" : "scale-100"}`}  // Use scale-110 for hover effect
                style={{ backgroundImage: `url(${item.imgURL})` }}
            >
                <div className={`flex justify-center items-center h-full w-full transition-all duration-150 bg-slate-200 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm ${isMouseOver ? "backdrop-blur-0 dark:backdrop-blur-0" : ""}`}>
                    <div className={`flex items-center justify-center transition-opacity duration-150 ${isMouseOver ? "opacity-100" : "opacity-0"}`}>
                        <Text font="display" size="md" weight="regular" align="center" text="Check out project" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center text-left p-2"> 
                <Text font="title" size="md" weight="bold" text={item.name} />
                <Text font="display" size="sm" weight="thin" text={item.category === "dev" ? "development" : item.category} />
            </div>
        </a>
    );
};

export default CarouselItem;
