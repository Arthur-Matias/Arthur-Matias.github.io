import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import Carousel from "../components/Carousel";
import { Project, ProjectCategory, useGlobalContext } from "../components/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [ currentItem, setCurrentItem ] = useState<ProjectCategory>("all");
    const [progress, setProgress] = useState(0);
    const lastTouchYRef = useRef(0); // Ref to hold the last touch Y position
    const accRef = useRef(0); // Ref to keep track of scroll acceleration
    const maxProgress = 1; // Set max value for progress to 1
    const speedFactor = 0.1; // Smaller value for smoother updates
    let { state } = useGlobalContext();
    const items:Project[] = state.projects.filter(i=>currentItem === "all"?true:i.category === currentItem);
    // function changeActiveItem(targetItems: ProjectCategory){
    const navigate = useNavigate();

    const handleContactBtn = () => {
        navigate(`/contact`);
        changeCurrentPage("contact");
    };
    // }
    // const items: Project;
    // console.log(currentItem)
    // console.log(currentItem === PortfolioItems.all)
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            // Calculate acceleration based on scroll
            accRef.current = Math.sign(event.deltaY) * speedFactor;

            setProgress(prevProgress => {
                const newProgress = prevProgress + accRef.current;
                return Math.max(0, Math.min(maxProgress, newProgress)); // Clamp the progress value
            });
        };

        const handleTouchMove = (event: TouchEvent) => {
            const currentTouchY = event.touches[0].clientY;
            const deltaY = currentTouchY - lastTouchYRef.current;
            accRef.current = Math.sign(deltaY) * speedFactor;

            setProgress(prevProgress => {
                const newProgress = prevProgress + accRef.current;
                lastTouchYRef.current = currentTouchY; // Update the ref
                return Math.max(0, Math.min(maxProgress, newProgress)); // Clamp the progress value
            });
        };

        // Add event listeners
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchmove', handleTouchMove);

        // Cleanup function
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <Layout progress={progress}>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <p className="font-display font-medium text-4xl">Hello, my name is</p>
                    <p className="font-title font-bold text-8xl text-blue-500 dark:text-blue-800">Arthur Matias</p>
                    <p className="font-display font-thin text-2xl">Designer & Software Engineer</p>
                </div>
            </div>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    {/* hi */}
                    {/* <Quote author="Arthur Matias" phrase="If you can dream, i can develop." /> */}
                    <Quote author="Neil deGrasse Tyson" phrase="I fear living a life where I could have done something and didn’t." />
                </div>
            </div>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="mb-5">
                        <button type="button" 
                            className={`px-5 border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-800 dark:active:border-blue-500 active:border-blue-900 transition-colors ${currentItem === "all"?"border-blue-500 dark:border-blue-800":""}`} 
                            onClick={() => setCurrentItem("all")}
                            >
                            All
                        </button>
                        <button type="button" 
                            className={`px-5 border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-800 dark:active:border-blue-500 active:border-blue-900 transition-colors ${currentItem === "design"?" border-blue-500 dark:border-blue-800":""}`} 
                            onClick={() => setCurrentItem("design")}
                        >
                            Design
                        </button>
                        <button type="button" 
                            className={`px-5 border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-800 dark:active:border-blue-500 active:border-blue-900 transition-colors ${currentItem === "dev"?" border-blue-500 dark:border-blue-800":""}`} 
                            onClick={() => setCurrentItem("dev")}
                        >
                            Development
                        </button>
                    </div>
                    <Carousel items={items} />
                    {/* hi */}
                    {/* <Quote author="Arthur Matias" phrase="If you can dream, i can develop." /> */}
                    {/* <Quote author="Neil deGrasse Tyson" phrase="I fear living a life where I could have done something and didn’t." /> */}
                </div>
            </div>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    {/* hi */}
                    <Quote author="Arthur Matias" phrase="If you can dream, i can develop." />
                    {/* <Quote author="Neil deGrasse Tyson" phrase="I fear living a life where I could have done something and didn’t." /> */}
                </div>
            </div>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <p className="font-title text-center text-4xl mb-6 font-bold">
                        Let’s bring your ideas to life. Contact me today!
                    </p>
                    <button onClick={handleContactBtn} onTouchEnd={handleContactBtn} className="bg-blue-500 dark:bg-blue-800 hover:opacity-75 rounded-full px-8 py-3 active:inner-shadow focus:inner-shadow transition-all duration-200 font-display font-medium text-2xl">
                        Get in touch
                    </button>
                </div>
            </div>
        </Layout>
    );
}
function changeCurrentPage(target: string) {
    throw new Error("Function not implemented.");
}

