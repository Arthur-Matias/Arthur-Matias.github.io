import { useState, useEffect } from "react";
import { iProject } from "../types";
import { useGlobalContext } from "./GlobalContext";
import CarouselItem from "./CarouselItem";
import Text from "./Text";
import CustomButton from "./CustomButton";

export default function WorksCarousel() {
    const { state } = useGlobalContext();
    const items: iProject[] = state.projects;

    const [displayItems, setDisplayItems] = useState<iProject[]>([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isMouseOverCards, setMouseOverCards] = useState(false);
    const [isActivating, setActivating] = useState(false);

    useEffect(() => {
        if (items.length) {
            setDisplayItems([...items, ...items]); // Duplicate items for the carousel
        }
    }, [items]);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => {
            const newIndex = (prev + 1) % displayItems.length;
            setTimeout(() => setIsTransitioning(false), 300);
            return newIndex;
        });
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
        setTimeout(() => setIsTransitioning(false), 200);
    };

    const handleClick = () => {
        setMouseOverCards(false);
        setActivating(true);

        setTimeout(() => {
            setActivating(false);
            setIsActive(true);
        }, 200);
    };

    if (!displayItems.length) {
        return <div className="text-center">Could not load the assets, please try again later</div>;
    }

    return (
        <>
            {isActive ? (
                <div className="h-full w-full flex flex-col">
                    <div className="relative flex w-full overflow-hidden">
                        <div
                            className={`flex transition-transform duration-300 ease-in-out ${isTransitioning ? 'transition-none' : ''}`}
                            style={{
                                transform: `translateX(-${(currentIndex * (100 / displayItems.length))}%)`,
                            }}
                        >
                            {displayItems.map((item, i) => (
                                <div className="mr-5" key={i}>
                                    <CarouselItem item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex text-center items-center justify-end mr-5 mt-5">
                        <div className="w-full flex">
                            <div>
                                <CustomButton ariaDescription="close portfolio" handleClick={() => setIsActive(false)} text="close" btnType="button" />
                            </div>
                            
                        </div>
                        <button onClick={handlePrev} className="rounded-full px-5 py-3 text-accent border border-accent mr-5" aria-label="Previous project">{"<"}</button>
                        <button onClick={handleNext} className="rounded-full px-5 py-3 text-accent border border-accent" aria-label="Next project">{">"}</button>
                    </div>
                </div>
            ) : (
                <div className="relative flex items-center justify-center h-full w-full">
                    <div className="absolute left-1/2 top-1/2  flex items-center justify-center">
                        <div className={`relative flex h-full w-full items-center justify-center transition-all duration-300 ${isMouseOverCards ? "-translate-y-10" : ""} ${isActivating?"translate-y-0 translate-x-0 scale-110":""}`}>
                            <div style={{ backgroundImage: `url(${items[2].imgURL})`,  backgroundSize: "cover"}} className={`absolute h-72 w-52 rounded duration-300 transition-transform ${isMouseOverCards ? "scale-75 -rotate-45 translate-y-16 -translate-x-32" : "scale-95"} ${isActivating?"-translate-x-36 rotate-0 scale-110":"-rotate-12 -translate-x-1/2"}`}>
                                <div className="h-full w-full bg-slate-200 dark:bg-gray-950 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-sm dark:backdrop-blur-sm"></div>
                            </div>
                            <div style={{ backgroundImage: `url(${items[1].imgURL})`,  backgroundSize: "cover"}} className={`absolute h-72 w-52 rounded duration-300 transition-transform z-10 ${isMouseOverCards ? "scale-110" : "-translate-y-5"} ${isActivating?"translate-y-0 -translate-x-96 scale-110":""}`}>
                                <div className="h-full w-full bg-slate-200 dark:bg-gray-950 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-sm dark:backdrop-blur-sm"></div>
                            </div>
                            <div style={{ backgroundImage: `url(${items[3].imgURL})`, backgroundSize: "cover"}} className={`absolute h-72 w-52 rounded duration-300 transition-transform ${isMouseOverCards ? "scale-75 rotate-45 translate-y-16 translate-x-32" : "scale-95"} ${isActivating?"translate-x-20 rotate-0 scale-110":"rotate-12 translate-x-1/2"}`}>
                                <div className="h-full w-full bg-slate-200 dark:bg-gray-950 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-sm dark:backdrop-blur-sm"></div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-80 z-10 mx-24 py-24 cursor-pointer" onMouseOver={() => setMouseOverCards(true)} onMouseOut={() => setMouseOverCards(false)} onClick={() => handleClick()} >
                        <Text text="Check out my Portfolio!" align="center" weight="bold" size="lg" font="display" />
                    </div>
                </div>
            )}
        </>
    );
}
