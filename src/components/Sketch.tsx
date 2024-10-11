import React, { useRef, useEffect } from "react";
import { SimplexNoise } from "three/examples/jsm/Addons.js";

interface BlobPoint {
    x: number;
    y: number;
    noiseOffsetX: number;
    noiseOffsetY: number;
    angle: number; 
}

interface BlobProps {
    offsetY: number;
    offsetX: number;
    numOfPoints: number; 
    minRadius: number; 
    maxRadius: number; 
    speedFactorX: number; 
    speedFactorY: number;
}

const BlobAnimation: React.FC<BlobProps> = ({ 
    numOfPoints, 
    minRadius, 
    maxRadius, 
    speedFactorX, 
    speedFactorY, 
    offsetX, 
    offsetY 
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const simplex = new SimplexNoise();
    let noiseStep = 0.01;

    const curve = (ctx: CanvasRenderingContext2D, points: number[], tension = 0.5, divisions = 20) => {
        const k = [];
        const extendedPoints = [
            points[points.length - 2], points[points.length - 1], 
            ...points, 
            points[0], points[1]
        ];

        for (let i = 0; i < extendedPoints.length - 3; i += 2) {
            const [x1, y1] = [extendedPoints[i], extendedPoints[i + 1]];
            const [x2, y2] = [extendedPoints[i + 2], extendedPoints[i + 3]];
            const [x3, y3] = [extendedPoints[i + 4], extendedPoints[i + 5]];
            const [x4, y4] = [extendedPoints[i + 6], extendedPoints[i + 7]];

            for (let j = 0; j <= divisions; j++) {
                const t = j / divisions;
                const t2 = t * t;
                const t3 = t2 * t;

                const x = 0.5 * ((2 * x2) +
                    (-x1 + x3) * t +
                    (2 * x1 - 5 * x2 + 4 * x3 - x4) * t2 +
                    (-x1 + 3 * x2 - 3 * x3 + x4) * t3);
                const y = 0.5 * ((2 * y2) +
                    (-y1 + y3) * t +
                    (2 * y1 - 5 * y2 + 4 * y3 - y4) * t2 +
                    (-y1 + 3 * y2 - 3 * y3 + y4) * t3);

                k.push(x, y);
            }
        }

        for (let i = 0; i < k.length; i += 2) {
            ctx.lineTo(k[i], k[i + 1]);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        let points: BlobPoint[] = [];

        function init() {
            if (!canvas) return;
            canvas.width = canvas.parentElement!.clientWidth;
            canvas.height = canvas.parentElement!.clientHeight;
            points = createPoints();
            requestAnimationFrame(render);
        }

        function createPoints() {
            const pointsArr: BlobPoint[] = [];
            const angleStep = (Math.PI * 2) / numOfPoints;

            for (let i = 0; i < numOfPoints; i++) {
                const theta = i * angleStep;
                const x = Math.cos(theta) * minRadius; 
                const y = Math.sin(theta) * minRadius;

                pointsArr.push({
                    x: x,
                    y: y,
                    noiseOffsetX: Math.random() * 1000,
                    noiseOffsetY: Math.random() * 1000,
                    angle: theta 
                });
            }
            return pointsArr;
        }

        function render() {
            if (!canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const computedStyle = getComputedStyle(document.documentElement);
                // Use the current state directly
            const mainColor = computedStyle.getPropertyValue('--color-main');
            const bgColor = computedStyle.getPropertyValue('--color-bg');
            const accentColor = computedStyle.getPropertyValue('--color-accent');                
            ctx.fillStyle = mainColor;
            ctx.beginPath();
            let pointArray: number[] = [];

            points.forEach(point => {
                const nX = simplex.noise(point.noiseOffsetX, point.noiseOffsetY) * speedFactorX;
                const nY = simplex.noise(point.noiseOffsetX + 1000, point.noiseOffsetY + 1000) * speedFactorY;

                // Maintain constant radius with slight variation
                const radius = (minRadius + maxRadius) / 2; 

                // Update position independently with offsets
                point.x = radius * Math.cos(point.angle) + nX + offsetX * (canvas.width);
                point.y = radius * Math.sin(point.angle) + nY + offsetY * (canvas.height);

                pointArray.push(point.x, point.y);
                point.noiseOffsetX += noiseStep;
                point.noiseOffsetY += noiseStep;
            });

            const firstPoint = pointArray.slice(0, 4);
            pointArray.push(...firstPoint);

            curve(ctx, pointArray);
            ctx.fill();
            ctx.closePath();

            requestAnimationFrame(render);
        }

        init();

        return () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [numOfPoints, minRadius, maxRadius, speedFactorX, speedFactorY, offsetX, offsetY]);

    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default BlobAnimation;
