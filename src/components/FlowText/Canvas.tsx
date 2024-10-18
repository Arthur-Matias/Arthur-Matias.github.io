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
    // effectRef.current.colors.colors.main = state.colors.main;
    // effectRef.current.colors.accentColor = state.darkTheme ? "white" : "black";
    effectRef.current.changeColor({bgColor: stateRef.current.colors.bg, accentColor: stateRef.current.colors.main, mainColor: stateRef.current.colors.bg})
    const animate = () => {
      if (effectRef.current) {
        effectRef.current.render(); // Render based on current effect state
      }

      if (shouldAnimate) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
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
  }, [parentRef, text, shouldAnimate, stateRef.current.colors.main, stateRef.current.darkTheme]);

  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.changeAnimationState(shouldAnimate);
    }
  }, [shouldAnimate]);

  // Update effect's colors when global context state changes
  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.changeColor({bgColor: state.colors.bg, accentColor: state.colors.accent, mainColor: state.colors.main})
    }
  }, [state.colors.main, state.colors.accent, state.colors.bg, state.darkTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', touchAction: 'none' }} 
    />
  );
};

function debounce<T extends unknown[]>(func: (...args: T) => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function(this: unknown, ...args: T) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}



export default Canvas;
