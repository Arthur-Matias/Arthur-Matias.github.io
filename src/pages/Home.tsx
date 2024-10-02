import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import Works from "../components/Works";

export default function Home() {
    const [progress, setProgress] = useState(0);
    const lastTouchYRef = useRef(0); // Ref to hold the last touch Y position
    const accRef = useRef(0); // Ref to keep track of scroll acceleration
    const maxProgress = 1; // Set max value for progress to 1
    const speedFactor = 0.1; // Smaller value for smoother updates

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
                    <p className="font-title font-bold text-8xl text-blue-600">Arthur Matias</p>
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
                    <Works targetWorks="webdev" />
                    {/* hi */}
                    {/* <Quote author="Arthur Matias" phrase="If you can dream, i can develop." /> */}
                    {/* <Quote author="Neil deGrasse Tyson" phrase="I fear living a life where I could have done something and didn’t." /> */}
                </div>
            </div>
        </Layout>
    );
}
