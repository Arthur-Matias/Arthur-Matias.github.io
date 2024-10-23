import React, { useRef, useEffect, useCallback, useMemo, useState } from "react";
import { SimplexNoise } from "three/examples/jsm/Addons.js";
import isMobile from "../scripts/checkMobile";
import { useGlobalContext } from "./GlobalContext";
import { curve } from "../scripts/curve";

interface BlobPoint {
    x: number;
    y: number;
    noiseOffsetX: number;
    noiseOffsetY: number;
    angle: number;
}

interface SketchProps {
    offsetX: number;
    offsetY: number;
    horizontalRadius: number;
    verticalRadius: number;
}

interface BlobProps {
    progress: number;
    maxPoints: number;
}

const BlobAnimation: React.FC<BlobProps> = ({ progress, maxPoints }) => {
    const { state } = useGlobalContext();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const simplex = useRef(new SimplexNoise()).current;
    const maxRadius = Math.min(window.innerHeight, window.innerWidth);
    const progressRef = useRef(progress);
    const animationFrameId = useRef<number | null>(null);

    const initialSketchProps: SketchProps = {
        offsetX: 0.5,
        offsetY: 0.5,
        horizontalRadius: isMobile() ? maxRadius * 0.2 : maxRadius,
        verticalRadius: isMobile() ? maxRadius : maxRadius * 0.2,
    };

    const sketchStates = useMemo(() => [
        { ...initialSketchProps },
        { offsetX: 0.5, offsetY: 0, horizontalRadius: maxRadius, verticalRadius: maxRadius },
        { offsetX: 0.5, offsetY: 1, horizontalRadius: maxRadius * 0.1, verticalRadius: maxRadius * 0.6 },
        { offsetX: 0.5, offsetY: 0, horizontalRadius: maxRadius, verticalRadius: maxRadius * 0.6},
        { offsetX: 0.5, offsetY: 1, horizontalRadius: maxRadius * 0.1, verticalRadius: maxRadius * 0.6 },
        { offsetX: 0.5, offsetY: 0.5, horizontalRadius: maxRadius * 0.6, verticalRadius: maxRadius * 0.6 },
    ], [maxRadius]);

    const createPoints = useCallback((maxPoints: number, maxRadius: number): BlobPoint[] => {
        const pointsArr: BlobPoint[] = [];
        const angleStep = (Math.PI * 2) / maxPoints;

        for (let i = 0; i < maxPoints; i++) {
            const theta = i * angleStep;
            pointsArr.push({
                x: Math.cos(theta) * maxRadius,
                y: Math.sin(theta) * maxRadius,
                noiseOffsetX: Math.random() * 1000,
                noiseOffsetY: Math.random() * 500,
                angle: theta,
            });
        }
        return pointsArr;
    }, []);

    const points = useRef<BlobPoint[]>(createPoints(maxPoints, maxRadius));

    const drawBlob = useCallback((ctx: CanvasRenderingContext2D, normalizedProgress: number, currentIndex: number) => {
        const from = sketchStates[currentIndex];
        const to = sketchStates[Math.min(currentIndex + 1, sketchStates.length - 1)];

        const offsetX = interpolate(from.offsetX, to.offsetX, normalizedProgress);
        const offsetY = interpolate(from.offsetY, to.offsetY, normalizedProgress);

        // Interpolate the radii
        const currentHorizontalRadius = interpolate(from.horizontalRadius, to.horizontalRadius, normalizedProgress);
        const currentVerticalRadius = interpolate(from.verticalRadius, to.verticalRadius, normalizedProgress);

        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-main').trim();
        ctx.beginPath();

        points.current.forEach(point => {
            if (!canvasRef.current) return;

            const step = (state.prefersReducedMotion || isMobile()) ? 0.0005 : 0.003;

            // Update noise offsets for animation
            point.noiseOffsetX += step;
            point.noiseOffsetY += step;

            // Calculate noise
            const nX = simplex.noise(point.noiseOffsetX, point.noiseOffsetY) * 150;
            const nY = simplex.noise(point.noiseOffsetX + 1000, point.noiseOffsetY + 1000) * 150;

            // Calculate position based on the updated radius values
            point.x = (currentHorizontalRadius * Math.cos(point.angle)) + nX + offsetX * canvasRef.current.width;
            point.y = (currentVerticalRadius * Math.sin(point.angle)) + nY + offsetY * canvasRef.current.height;

            ctx.lineTo(point.x, point.y);
        });

        const controlPoints = points.current.map(point => [point.x, point.y]).flat();
        controlPoints.push(controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3]);

        // Generate the curve points
        const curvePoints = curve(ctx, controlPoints);

        // Draw the curve points
        ctx.moveTo(curvePoints[0], curvePoints[1]);
        for (let i = 0; i < curvePoints.length; i += 2) {
            ctx.lineTo(curvePoints[i], curvePoints[i + 1]);
        }

        ctx.closePath();
        ctx.fill();
    }, [sketchStates, simplex, state.prefersReducedMotion]);

    const interpolate = (from: number, to: number, t: number) => {
        return from + (to - from) * t;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = canvas.parentElement!.clientWidth;
                canvas.height = canvas.parentElement!.clientHeight;
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const render = () => {
            if (!canvasRef.current) return;
            const ctx = canvasRef.current.getContext("2d");
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentIndex = Math.floor(progressRef.current / 100);
            const normalizedProgress = (progressRef.current / 100) - currentIndex;

            drawBlob(ctx, normalizedProgress, currentIndex);
            animationFrameId.current = requestAnimationFrame(render);
        };

        render();
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
                window.removeEventListener('resize', resizeCanvas);
            }
        };
    }, [drawBlob]);

    useEffect(() => {
        progressRef.current = progress;
    }, [progress]);

    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BlobAnimation;
