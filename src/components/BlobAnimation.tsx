import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { SimplexNoise } from "three/examples/jsm/Addons.js";
import isMobile from "../scripts/checkMobile";
import { useGlobalContext } from "./GlobalContext";

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

// import React, { useRef, useEffect, useCallback, useMemo } from "react";
// import { SimplexNoise } from "three/examples/jsm/Addons.js";
// import isMobile from "../scripts/checkMobile";

// import React, { useRef, useEffect, useCallback, useMemo } from "react";
// import { SimplexNoise } from "three/examples/jsm/Addons.js";
// import isMobile from "../scripts/checkMobile";

const BlobAnimation: React.FC<BlobProps> = ({ progress, maxPoints }) => {
    const { state } = useGlobalContext();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const simplex = useRef(new SimplexNoise()).current;
    const maxRadius = Math.min(window.innerHeight, window.innerWidth) * 0.7;
    const progressRef = useRef(progress); // Use ref for progress to avoid re-renders

    const initialSketchProps: SketchProps = {
        offsetX: 0.5,
        offsetY: 0.5,
        horizontalRadius: isMobile() ? maxRadius - (maxRadius / 3) : maxRadius,
        verticalRadius: isMobile() ? maxRadius : maxRadius - (maxRadius / 3),
    };
    const curve = (
        context: CanvasRenderingContext2D,
        h: number[],
        r: number = 0.5,
        f: number = 20,
        c: boolean = false
    ): number[] => {
        const k: number[] = [];
        const e: number = h.length;
        const a: Float32Array = new Float32Array((f + 2) * 4);
        let b: number = 4;

        const j: number[] = h.slice(0);
        if (c) {
            j.unshift(h[e - 1], h[e - 2]);
            j.push(h[0], h[1]);
        } else {
            j.unshift(h[0], h[1]);
            j.push(h[e - 2], h[e - 1]);
        }

        a[0] = 1;

        for (let d = 1; d < f; d++) {
            const m = d / f;
            const n = m * m;
            const p = n * m;
            const o = p * 2;
            const q = n * 3;

            a[b++] = o - q + 1;
            a[b++] = q - o;
            a[b++] = p - 2 * n + m;
            a[b++] = p - n;
        }

        a[++b] = 1;

        generateCurve(j, a, e, k, r, f);

        for (let d = 0; d < k.length; d += 2) {
            context.lineTo(k[d], k[d + 1]);
        }

        return k;
    };

    const generateCurve = (
        B: number[],
        u: Float32Array,
        w: number,
        k: number[],
        r: number,
        f: number
    ): void => {
        for (let v = 2; v < w; v += 2) {
            const x = B[v];
            const y = B[v + 1];
            const z = B[v + 2];
            const A = B[v + 3];
            const D = (z - B[v - 2]) * r;
            const E = (A - B[v - 1]) * r;
            const F = (B[v + 4] - x) * r;
            const G = (B[v + 5] - y) * r;

            for (let C = 0; C <= f; C++) {
                const s = C * 4;
                k.push(
                    u[s] * x + u[s + 1] * z + u[s + 2] * D + u[s + 3] * F,
                    u[s] * y + u[s + 1] * A + u[s + 2] * E + u[s + 3] * G
                );
            }
        }
    };
    const sketchStates = useMemo(() => [
        { ...initialSketchProps },
        { offsetX: 0.5, offsetY: 0, horizontalRadius: maxRadius, verticalRadius: maxRadius },
        { offsetX: 0.5, offsetY: 1, horizontalRadius: maxRadius, verticalRadius: maxRadius },
        { offsetX: 0.5, offsetY: 0, horizontalRadius: maxRadius, verticalRadius: maxRadius },
        { offsetX: 0.5, offsetY: 0.5, horizontalRadius: maxRadius, verticalRadius: maxRadius },
        { offsetX: 0.5, offsetY: 0.5, horizontalRadius: maxRadius, verticalRadius: maxRadius / 4 },
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

    const drawBlob = useCallback((ctx: CanvasRenderingContext2D, horizontalRadius: number, verticalRadius: number, normalizedProgress: number, currentIndex: number) => {
        const from = sketchStates[currentIndex];
        const to = sketchStates[Math.min(currentIndex + 1, sketchStates.length - 1)];

        const offsetX = interpolate(from.offsetX, to.offsetX, normalizedProgress);
        const offsetY = interpolate(from.offsetY, to.offsetY, normalizedProgress);

        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-main').trim();
        ctx.beginPath();
        points.current.forEach(point => {
            if(!canvasRef.current) return
            const step = state.prefersReducedMotion?0.0005:0.003
           
            point.noiseOffsetX += step;
            point.noiseOffsetY += step;

            const nX = simplex.noise(point.noiseOffsetX, point.noiseOffsetY) * 150;
            const nY = simplex.noise(point.noiseOffsetX + 1000, point.noiseOffsetY + 1000) * 150;

            point.x = (horizontalRadius * Math.cos(point.angle)) + nX + offsetX * canvasRef.current.width;
            point.y = (verticalRadius * Math.sin(point.angle)) + nY + offsetY * canvasRef.current.height;

            ctx.lineTo(point.x, point.y);
        });

        const controlPoints = points.current.map(point => [point.x, point.y]).flat();
        controlPoints.push(controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3])
        // Generate the curve points
        const curvePoints = curve(ctx, controlPoints);

        // Draw the curve points
        ctx.moveTo(curvePoints[0], curvePoints[1]); // Move to the first point of the curve
        for (let i = 0; i < curvePoints.length; i += 2) {
            ctx.lineTo(curvePoints[i], curvePoints[i + 1]);
        }

        ctx.closePath();
        ctx.fill();
    }, [sketchStates, simplex]);

    const interpolate = (from: number, to: number, t: number) => {
        return from + (to - from) * t;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement!.clientWidth;
            canvas.height = canvas.parentElement!.clientHeight;
        };

        resizeCanvas();
        // window.addEventListener('resize', resizeCanvas);

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const currentIndex = Math.floor(progressRef.current / 100);
            const normalizedProgress = (progressRef.current / 100) - currentIndex;

            const { horizontalRadius, verticalRadius } = sketchStates[currentIndex];
            drawBlob(ctx, horizontalRadius, verticalRadius, normalizedProgress, currentIndex);

            requestAnimationFrame(render);
        };

        render();

        
    }, [drawBlob, sketchStates]); // Removed progress from dependency array

    useEffect(() => {
        progressRef.current = progress; // Update ref when progress changes
    }, [progress]);

    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BlobAnimation;
