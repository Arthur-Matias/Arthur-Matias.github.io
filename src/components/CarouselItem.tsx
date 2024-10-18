const CarouselItem: React.FC<{ imgURL: string; name: string; hover: boolean }> = ({ imgURL, name, hover }) => {
    
    
    return (
        <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center"
            style={{ 
                backgroundImage: `url(${imgURL})`, 
                backgroundSize: ""
                // backgroundColor,
            }}
        >
            {!hover && (
                <div 
                    className={`flex bg-slate-200 dark:bg-gray-950 dark:bg-opacity-50 justify-center items-center text-lg w-full h-full text-center transition-opacity backdrop-blur-sm`}
                >
                    <p className="transition-all">{name}</p>
                </div>
            )}
        </div>
    );
};

export default CarouselItem;
