import { useEffect, useState } from "react";

interface Project {
    imgURL: string;
    alt: string;
    link: string;
    name: string;
}

interface CarouselProps {
    items: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset the currentIndex when items change
    useEffect(() => {
        if (items.length > 0) {
            setCurrentIndex(0); // Reset to first item
        }
    }, [items]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    if (items.length === 0) {
        return <div>No items available.</div>; // Handle empty items case
    }

    return (
        <div className="relative w-full">
            <div className="relative h-80 overflow-hidden rounded-lg">
                {items.map((item, index) => (
                    <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}>
                        <img
                            src={item.imgURL}
                            className="absolute w-full h-full object-cover"
                            alt={item.alt}
                        />
                        <div className="absolute w-full h-full bg-black opacity-35"></div>
                        <a href={item.link} className="absolute bottom-0 w-full bg-black opacity-75 flex items-center justify-center h-20">
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
            <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">Previous</button>
            <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">Next</button>
        </div>
    );
};

export default Carousel;
