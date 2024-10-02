// import React, { useEffect, useRef } from 'react';
// import p5 from 'p5';
// import { useGlobalContext } from './GlobalContext';

// interface SketchComponentProps { 
//     progress?: number; 
// }

// const SketchComponent: React.FC<SketchComponentProps> = ({ progress = 0 }) => {
//     const sketchRef = useRef<HTMLDivElement | null>(null);
//     const { state } = useGlobalContext();
//     const stateRef = useRef(state);
//     const progressRef = useRef(progress);
//     const myP5Ref = useRef<p5 | null>(null);
    
//     const currentAnglesRef = useRef<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

//     const animationStates = [
//         {
//             angle: { x: 0, y: 0, z: 0 },
//             translate: { x: 0, y: 0, z: 0 },
//             minProgress: 0,
//             maxProgress: 1,
//         },
//         {
//             angle: { x: 120, y: 0, z: 0 },
//             translate: { x: 0, y: 0, z: 0 },
//             minProgress: 1,
//             maxProgress: 2,
//         },
//     ];

//     useEffect(() => {
//         stateRef.current = state;
//     }, [state]);

//     useEffect(() => {
//         const sketch = (p: p5) => {
//             let maxSize = Math.max(p.windowHeight, p.windowWidth);
//             let numDivs = 2000//Math.min(p.windowHeight, p.windowWidth);
//             let radius = 100; // Adjusted for visibility
//             let currentPositions: { x: number; y: number; z: number }[] = [];
//             let velocities: { x: number; y: number; z: number }[] = [];
//             const FPS = 60;
//             const renderer = p.WEBGL;

//             let angleX: number = 0, angleY: number = 0;

//             function setup() {
//                 if (sketchRef.current) {
//                     p.createCanvas(p.windowWidth, p.windowHeight, renderer).parent(sketchRef.current);
//                 }
//                 for (let a = 0; a < numDivs; a++) {
//                     const angleOffset = p.TAU / numDivs * a;
//                     const r = radius + p.random() * maxSize / 2;
//                     currentPositions.push({
//                         x: r * p.sin(angleOffset),
//                         y: r * p.cos(angleOffset),
//                         z: p.sin(a * 0.1) * 50
//                     });
//                     velocities.push({
//                         x: p.random(-1, 1),
//                         y: p.random(-1, 1),
//                         z: p.random(-1, 1),
//                     });
//                 }
//                 p.frameRate(FPS);
//             }

//             function draw() {
//                 if (!stateRef.current.menuOpen) {
//                     p.background(0, 0);

//                     // Apply device orientation
//                     p.rotateY(angleY);
//                     p.rotateX(angleX);

//                     const currentProgress = progressRef.current;

//                     // Determine the current animation state based on progress
//                     let currentAnimationState = animationStates[0];
//                     let nextAnimationState = animationStates[1];
//                     animationStates.forEach((e, i)=>{
//                         if (currentProgress >= e.minProgress && currentProgress < e.maxProgress) {
//                             currentAnimationState = e;
//                             nextAnimationState = animationStates[i+1]?animationStates[i+1]:animationStates[i-1]?animationStates[i-1]:e;
//                         }
//                     })
//                     for (const state of animationStates) {
//                     }

//                     const { angle: startAngle, translate: startTranslate } = currentAnimationState;
//                     const { angle: endAngle, translate: endTranslate } = nextAnimationState;

//                     // Calculate normalized progress
//                     const normalizedProgress = (currentProgress - currentAnimationState.minProgress) / 
//                                                (nextAnimationState.minProgress - currentAnimationState.minProgress);
//                     const clampedProgress = normalizedProgress;

//                     // Interpolate angles and translations
//                     currentAnglesRef.current = {
//                         x: p.lerp(startAngle.x, endAngle.x, clampedProgress),
//                         y: p.lerp(startAngle.y, endAngle.y, clampedProgress),
//                         z: p.lerp(startAngle.z, endAngle.z, clampedProgress),
//                     };

//                     p.push();
//                     p.rotateZ(p.radians(currentAnglesRef.current.z));
//                     p.rotateY(p.radians(currentAnglesRef.current.y));
//                     p.rotateX(p.radians(currentAnglesRef.current.x));
//                     p.translate(
//                         p.lerp(startTranslate.x, endTranslate.x, clampedProgress),
//                         p.lerp(startTranslate.y, endTranslate.y, clampedProgress),
//                         p.lerp(startTranslate.z, endTranslate.z, clampedProgress)
//                     );

//                     for (let n = 0; n < currentPositions.length; n++) {
//                         // Update positions with velocities
//                         currentPositions[n].x += velocities[n].x;
//                         currentPositions[n].y += velocities[n].y;
//                         currentPositions[n].z += velocities[n].z;

//                         // Bounce off walls
//                         if (currentPositions[n].x > p.width / 2 || currentPositions[n].x < -p.width / 2) {
//                             velocities[n].x *= -1;
//                         }
//                         if (currentPositions[n].y > p.height / 2 || currentPositions[n].y < -p.height / 2) {
//                             velocities[n].y *= -1;
//                         }
//                         if (currentPositions[n].z > 100 || currentPositions[n].z < -100) {
//                             velocities[n].z *= -1;
//                         }

//                         // Draw the particle
//                         p.stroke(stateRef.current.darkTheme ? "white" : "black");
//                         p.point(currentPositions[n].x, currentPositions[n].y, currentPositions[n].z);
//                     }
//                     p.pop();
//                 }
//             }

//             p.setup = setup;
//             p.draw = draw;
//         };

//         myP5Ref.current = new p5(sketch);

//         return () => {
//             myP5Ref.current?.remove(); // Cleanup on unmount
//         };
//     }, []); // Only run on mount

//     useEffect(() => {
//         progressRef.current = progress;
//     }, [progress]);

//     return <div ref={sketchRef}></div>;
// };

// export default SketchComponent;
