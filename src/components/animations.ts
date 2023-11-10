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
            // console.log("creating blob")
            blob = createBlobAnimation(animProps.targetElementID, 4, "white", 0.005, img);
            aboutSketch = requestAnimationFrame(blob.init)
        }else{
            sketch = new p5((p)=>anims[animProps.animation]({p,color: animProps.params?.color, element: element}));
        }
    }
    function stopSketch(){
        if(animProps.animation === Animations.blobAnimation){
            cancelAnimationFrame(aboutSketch)
            // console.log("stopping blob")
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

    // console.log(targetElement)

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
        console.log()
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
        // console.log(level)
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
        if(angle>359){
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
        // const menu = document.getElementById("menu") as HTMLElement;
        // if(!menu.classList.contains("open")){
        //     p.noLoop();
        // }
        let gridSize = p.height>p.width?p.width:p.height;
        let gridStep = gridSize/totalIntervals;
        p.background(0,0);
        p.clear(0,0,0,0);
        p.fill(79, 79, 80);
        p.noStroke();
        for (let x = gridStep*0.7; x <= p.width - (gridStep/2); x += gridStep) {
            for (let y = gridStep*0.7; y <= p.height - (gridStep/2); y += gridStep) {
                let aspectRatio = p.height / p.width;
                let dx = (p.mouseX - x) / p.width;
                let dy = (p.mouseY - y) / (aspectRatio * p.width);
                let d = Math.sqrt(dx*dx + dy*dy);
                let r = p.map(d, 0, Math.sqrt(2), 0, gridStep*0.7);
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
// function dotMatrix(p: p5, targetElement: HTMLDivElement){

//     let canvasWidth = targetElement.offsetWidth;
//     let canvasHeight = targetElement.offsetHeight;
//     let frameCount = 0;
//     let changeAngle = true;
//     // let gridSize = canvasHeight>canvasWidth?canvasWidth:canvasHeight;
//     let gridSize = canvasHeight>canvasWidth?canvasWidth-50:canvasHeight-50;
//     let totalIntervals = 12;
//     let gridStep = gridSize/totalIntervals;
//     let angle = 0;

//     const setup = ()=>{
//         p.createCanvas(canvasWidth, canvasHeight).parent(targetElement)

//     }
//     const draw = ()=>{
//         p.background(0);

//         for (let x = 0; x <= p.width; x += gridStep) {
//             for (let y = 0; y <= p.height; y += gridStep) {
//                 let d = p.dist(p.mouseX, p.mouseY, x, y);
//                 let r = p.map(d, 0, p.dist(0, 0, 200, 200), 500, gridStep*0.1);
//                 p.ellipse(x, y, r, r);
//             }
//         }
//         // attractor.draw();
//     }

//     window.onresize = ()=>{
//         angle = 0;
//         frameCount = 0;
//         changeAngle = true;
//         canvasWidth = targetElement.offsetWidth;
//         canvasHeight = targetElement.offsetHeight;
//         p.resizeCanvas(canvasWidth, canvasHeight);
//         gridSize = canvasHeight>canvasWidth?canvasWidth-50:canvasHeight-50;

        
//     }
    
//     // class Particle{
        
//     //     initialPos: p5.Vector;
//     //     pos: p5.Vector;
//     //     acceleration: p5.Vector;
//     //     velocity: p5.Vector;
//     //     mass: number;

//     //     constructor(x:number,y:number, m: number){
//     //         this.initialPos = p.createVector(x,y)
//     //         this.pos = this.initialPos;
//     //         this.acceleration = p.createVector();
//     //         this.velocity = p.createVector();
//     //         this.mass = m;
//     //     }
//     //     attract(particle: Particle){
//     //         let force = p5.Vector.sub(this.pos, particle.pos);
//     //         let distanceSq = force.magSq();

//     //         let G = 20;

//     //         // let strength = G * (this.mass * particle.mass) / distanceSq;
//     //         let strength = G * 1/distanceSq

//     //         force.setMag(strength);

//     //         particle.applyForce(force)

//     //     }
//     //     applyForce(force: p5.Vector){
//     //         let f: p5.Vector = force.div(this.mass);
//     //         this.acceleration.add(f)
//     //     }
//     //     update(){
            
//     //         if(this.pos.x > gridStep*(totalIntervals-0.5) || this.pos.x < 0 || this.pos.y > gridStep*(totalIntervals-0.5) || this.pos.y < 0){
//     //             this.velocity.mult(-1, -1)
//     //             this.acceleration.mult(-1, -1)
//     //         }
//     //         // console.log(this.velocity.mag())
//     //         if(this.velocity.mag() > 3){
//     //             this.velocity.setMag(3)
//     //         }
//     //         this.velocity.add(this.acceleration);
//     //         this.pos.add(this.velocity);
            
//     //         this.acceleration.set(0,0)
//     //     }
//     //     draw(){
//     //         p.strokeWeight(10);
//     //         p.point(this.pos)
//     //         if(this.pos !== this.initialPos && this.acceleration === p.createVector()){
//     //             let dist = p5.Vector.sub(this.pos, this.initialPos);
                
//     //             this.pos.sub(dist.mult(0.1))
//     //         }
//     //     }
//     // }

//     p.setup = setup
//     p.draw = draw

// }