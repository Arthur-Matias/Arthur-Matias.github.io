import React, { useEffect, useRef } from "react";
import Effect from "./effect"; // Adjust the import path accordingly
import { useGlobalContext } from "../GlobalContext";

interface CanvasProps {
  parentRef: React.RefObject<HTMLDivElement>;
  text: string;
  shouldAnimate: boolean;
}

const Canvas: React.FC<CanvasProps> = ({ parentRef, text, shouldAnimate }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const effectRef = useRef<Effect | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { state } = useGlobalContext();
  const stateRef = useRef(state); // Create a ref to hold the current state

  useEffect(() => {
      stateRef.current = state; // Update the ref whenever the state changes
  }, [state]);
  useEffect(() => {
    if (!parentRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = parentRef.current!.clientWidth;
      canvas.height = parentRef.current!.clientHeight;
    };

    setCanvasSize(); // Initial size

    // Initialize effect
    effectRef.current = new Effect(canvas, ctx, text, shouldAnimate);
    
    // Set initial colors based on context state
    // effectRef.current.colors.mainColor = state.mainColor;
    // effectRef.current.colors.accentColor = state.darkTheme ? "white" : "black";
    effectRef.current.changeColor({bgColor: stateRef.current.darkTheme ? "black" : "white", accentColor: stateRef.current.darkTheme ? "white":"black", mainColor: stateRef.current.mainColor})
    const animate = () => {
      if (effectRef.current) {
        effectRef.current.render(); // Render based on current effect state
      }

      if (shouldAnimate) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    // Resize listener
    const handleResize = debounce(() => {
      setCanvasSize();
      effectRef.current?.resize(canvas.width, canvas.height); // Resize effect if needed
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [parentRef, text, shouldAnimate, stateRef.current.mainColor, stateRef.current.darkTheme]);

  // Update effect's animation state when shouldAnimate prop changes
  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.changeAnimationState(shouldAnimate);
    }
  }, [shouldAnimate]);

  // Update effect's colors when global context state changes
  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.changeColor({bgColor: state.darkTheme ? "black" : "white", accentColor: state.darkTheme ? "white":"black", mainColor: state.mainColor})
    }
  }, [state.mainColor, state.darkTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', touchAction: 'none' }} 
    />
  );
};

// Debounce function
function debounce(func: (...args: any[]) => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: any[]) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

export default Canvas;
