import p5 from "p5"
import { blobControls, createBlobAnimation } from "./blobAnimation";

export enum Animations{
    circleRotation = "circleRotation",
    dotSquare="dotSquare",
    dotMatrix="dotMatrix",
    blobAnimation = "blobAnimation"
}
interface AnimationProps{
    p?: p5;
    element?: HTMLDivElement;
    color?: string;
}
interface AnimationSetupProps{
    targetElementID: string;
    animation: Animations;
    params?: AnimationProps;
}
export interface animationControls{
    stopSketch: () => void;
    startSketch: () => void;
}
export function setupAnimation(animProps:AnimationSetupProps): animationControls{
    const anims: {[animation in Animations]: (params:AnimationProps)=>void} = {
        "circleRotation": ({p, element}:AnimationProps) => circleRotation(p as p5, element as HTMLDivElement),
        "blobAnimation" : ()=>{},
        "dotSquare" : ({p, element}:AnimationProps) => dotSquare(p as p5, element as HTMLDivElement),
        "dotMatrix" : ({p, element}:AnimationProps) => dotMatrix(p as p5, element as HTMLDivElement),
    }
    const element = document.getElementById(animProps.targetElementID) as HTMLDivElement;
    let sketch: p5;
    let aboutSketch: number = 0;
    let blob: blobControls | undefined;

    function startSketch(){
        if(animProps.animation === Animations.blobAnimation){
            const img = new Image()
            img.src = "/picture.png"
            blob = createBlobAnimation(animProps.targetElementID, 4, "white", 0.005, img);
            aboutSketch = requestAnimationFrame(blob.init);
        }else{
            sketch = new p5((p)=>anims[animProps.animation]({p,color: animProps.params?.color, element: element}));
        }
    }
    function stopSketch(){
        if(animProps.animation === Animations.blobAnimation){
            (document.getElementById(animProps.targetElementID) as HTMLElement).innerHTML = ""
            cancelAnimationFrame(aboutSketch)
        }else{
            sketch.remove();
        }
    }
    return {
        stopSketch,
        startSketch
    }
}

function circleRotation(p: p5, targetElement: HTMLDivElement){

    let canvasWidth = targetElement.offsetWidth;
    let canvasHeight = targetElement.offsetHeight;
    
    let maxIteration = 6;
    let angle = 0;
    let initialDiameter = canvasHeight>canvasWidth?canvasWidth-50:canvasHeight-50;

    const setup = ()=>{
        p.createCanvas(canvasWidth, canvasHeight).parent(targetElement)
    }
    const draw = ()=>{
        p.background(0,0);
        p.clear(0,0,0,0);
        p.translate(canvasWidth/2, canvasHeight/2)
        p.fill(0, 0, 0, 0);
        p.strokeWeight(initialDiameter*0.005)
        p.stroke(214,216,218, p.map(maxIteration, 0, 5, 10, 100));
        p.circle(0, 0, initialDiameter)
        drawCircles(0, 0, initialDiameter, maxIteration)
        if(angle>359){
            angle=0
        }
        angle+=0.005;
    }

    function drawCircles(x: number,y: number,d: number, maxLevel:number, level:number = maxLevel){
        let newDiameter = d*0.618;
        const xPos = (d - newDiameter)/2 * p.cos(angle * 0.618*level) + x;
        const yPos = (d - newDiameter)/2 * p.sin(angle * (0.618*level)) + y;
        p.push();
        p.stroke(214,216,218, p.map(level, 0, 5, 10, 100));
        p.translate(xPos, yPos)
        p.circle(0, 0, newDiameter)
        p.pop();
        if(level > 1){
            drawCircles(xPos, yPos, newDiameter, maxLevel, level-1);
        }
    }

    p.setup = setup;
    p.draw = draw;

}
function dotSquare(p: p5, targetElement: HTMLDivElement){
    let canvasWidth = targetElement.offsetWidth;
    let canvasHeight = targetElement.offsetHeight;
    let frameCount = 0;
    let changeAngle = true;
    let quadSize = canvasHeight>canvasWidth?canvasWidth:canvasHeight;
    const quadArray = [
        [-0.5, -0.5, -0.5],
        [0.5, -0.5, -0.5],
        [0.5, 0.5, -0.5],
        
        [0.5, 0.5, 0.5],
        [-0.5, 0.5, 0.5],
        [-0.5, 0.5, -0.5],
        
        [-0.5, 0.5, 0],
        [-0.5, -0.5, 0],
        [-0.5, -0.5, 0.5],

        [0.5, 0.5, 0],
        [0.5, -0.5, 0.5],
        [0.5, -0.5, 0],
        
        [0, 0, 0],
        [0, 0, -0.5],
        [0, 0, 0.5],
        
        [-0.5, 0, -0.5],
        [-0.5, 0, 0],
        [-0.5, 0, 0.5],
        
        [0.5, 0, -0.5],
        [0.5, 0, 0],
        [0.5, 0, 0.5],
        
        [0, -0.5, -0.5],
        [0, -0.5, 0],
        [0, -0.5, 0.5],
        
        [0, 0.5, -0.5],
        [0, 0.5, 0],
        [0, 0.5, 0.5],
    ]
    let angle = 0;
    const setup = ()=>{
        p.createCanvas(canvasWidth, canvasHeight, p.WEBGL).parent(targetElement)
        p.angleMode(p.DEGREES)
    }
    const draw = ()=>{
        p.background(0,0);
        p.clear(0,0,0,0);
        p.rotateX(angle)
        p.rotateY(angle*0.5)
        p.ortho()
        quadArray.forEach(point=>{
            p.push()
            p.noStroke();
            // p.normalMaterial()
            p.emissiveMaterial(214,216,218);
            p.translate(point[0]*(quadSize/2), point[1]*(quadSize/2), point[2]*(quadSize/2))
            p.sphere(quadSize*0.05)
            p.pop()
        })
        if(p.round(angle) == 0 || p.round(angle)==90 || p.round(angle) === 180 || p.round(angle) === 360 || p.round(angle) === 270){
            changeAngle = false;
        }
        frameCount += 1;
        if(frameCount>120){
            frameCount = 0
            changeAngle = true
        }
        if(changeAngle){
            angle += 0.5
        }
        if(angle>360){
            angle = 0;
        }

    }
    p.setup = setup;
    p.draw = draw;
}
function dotMatrix(p: p5, targetElement: HTMLDivElement){

    let canvasWidth = targetElement.offsetWidth;
    let canvasHeight = targetElement.offsetHeight;
    let totalIntervals = 16;
    
    const setup = ()=>{
        p.createCanvas(canvasWidth, canvasHeight).parent(targetElement)
        
    }
    const draw = ()=>{
        let gridSize = p.height>p.width?p.width:p.height;
        let gridStep = gridSize/totalIntervals;
        p.background(0,0);
        p.clear(0,0,0,0);
        p.fill(79, 79, 80);
        p.noStroke();
        for (let x = gridStep; x <= p.width - (gridStep/2); x += gridStep) {
            for (let y = gridStep; y <= p.height - (gridStep/2); y += gridStep) {
                let aspectRatio = p.height / p.width;
                let dx = (p.mouseX - x) / p.width;
                let dy = (p.mouseY - y) / (aspectRatio * p.width);
                let d = Math.sqrt(dx*dx + dy*dy);
                let r = p.map(d, 0, Math.sqrt(2), 0, gridStep);
                p.push()
                p.translate(x,y)
                p.ellipse(0,0, r, r);
                p.pop()
            }
        }
    }

    p.setup = setup
    p.draw = draw
}