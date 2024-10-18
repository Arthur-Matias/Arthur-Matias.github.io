import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import CustomButton from "./CustomButton";

interface Project {
    imgURL: string;
    alt: string;
    link: string;
    name: string;
}

interface CarouselProps {
    items: Project[]; // Array of projects
    currentIndex: number; // Current index to display
    handlePrev: () => void; 
    handleNext: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ items, currentIndex, handlePrev, handleNext }) => {
    const [isHover, setIsHover] = useState(false);
    const [startX, setStartX] = useState<number | null>(null);

    // Ensure items are available before proceeding
    const currentItem = items && items.length > 0 ? items[currentIndex] : null;

    // Preload images only if items exist
    useEffect(() => {
        if (items.length > 0) {
            items.forEach(item => {
                const img = new Image();
                img.src = item.imgURL;
            });
        }
    }, [items]);

    // If no current item, show an error message
    if (!currentItem) {
        return <div className="text-center">Could not load the assets, please, try again later</div>;
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startX === null) return;

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        // If swiped right
        if (diffX > 50) {
            handleNext();
            setStartX(null); // Reset after handling
        }
        // If swiped left
        else if (diffX < -50) {
            handlePrev();
            setStartX(null); // Reset after handling
        }
    };

    return (
        <div
            className="relative mt-5 px-14 w-full h-full overflow-hidden flex items-center justify-center aspect-custom"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <a
                target="_blank"
                className="h-full w-full"
                href={currentItem.link}
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
            >
                <CarouselItem imgURL={currentItem.imgURL} name={currentItem.name} hover={isHover} />
            </a>
            <div className="absolute h-full bottom-0 left-0 top-1/2 transform px5 -translate-y-1/2 z-10 rounded flex justify-center items-center">
                <CustomButton btnType="button" handleClick={handlePrev} text="<-" />
            </div>
            <div className="absolute bottom-0 right-0 top-1/2 transform h-full px5 -translate-y-1/2 z-10 rounded flex justify-center items-center">
                <CustomButton btnType="button" handleClick={handleNext} text="->" />
            </div>
        </div>
    );
};

export default Carousel;
