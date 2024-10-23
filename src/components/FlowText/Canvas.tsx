import React, { useEffect, useRef } from "react";
import Effect from "./effect"; // Adjust the import path accordingly
import { useGlobalContext } from "../GlobalContext";

interface CanvasProps {
    parentRef: React.RefObject<HTMLDivElement>;
    text: string;
    shouldAnimate: boolean;
}

const Canvas: React.FC<CanvasProps> = React.memo(({ parentRef, text, shouldAnimate }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const effectRef = useRef<Effect | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const { state } = useGlobalContext();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = parentRef.current!.clientWidth;
            canvas.height = parentRef.current!.clientHeight;
        };

        setCanvasSize();

        // Initialize effect if it doesn't exist
        if (!effectRef.current) {
            effectRef.current = new Effect(canvas, ctx, text, shouldAnimate);
        } else {
            effectRef.current.changeAnimationState(shouldAnimate);
            effectRef.current.changeColor({
                bgColor: state.colors.bg,
                accentColor: state.colors.main,
                mainColor: state.colors.bg,
            });
            effectRef.current.changeText(text); // Change the text without remounting
        }

        const animate = () => {
            if (effectRef.current) {
                effectRef.current.render();
            }
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = debounce(() => {
            setCanvasSize();
            effectRef.current?.resize(canvas.width, canvas.height);
        }, 200);

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [parentRef, text, shouldAnimate, state]);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: 'block', touchAction: 'none' }} 
        />
    );
});

// Debounce function
function debounce<T extends unknown[]>(func: (...args: T) => void, delay: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function(this: unknown, ...args: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

export default Canvas;
