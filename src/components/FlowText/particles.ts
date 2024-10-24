import Effect from "./effect";
import { Vector } from "./types";

class Particle{
    effect: Effect;
    pos: Vector;
    speed: Vector;
    history: Vector[]
    maxLength: number;
    angle: number;
    newAngle: number;
    angleCorrector: number;
    speedModifier: number;
    timer: number;
    // color: string;
    // colors: string[];

    constructor( effect: Effect ){
        this.effect = effect;
        this.pos = {
            x: Math.floor(Math.random() * this.effect.width),
            y: Math.floor(Math.random() * this.effect.height)
        }
        this.speed = {
            x: 0,
            y: 0
        }
        this.speedModifier = Math.floor(Math.random() * 2 + 1);
        this.history = [{x: this.pos.x, y: this.pos.y}]
        this.maxLength = Math.floor(Math.random() * 30 + 2);
        this.angle = 0;
        this.newAngle = 0;
        this.angleCorrector = Math.random() * 0.5 + 0.01;
        this.timer = this.maxLength * 2;
    }

    draw(context: CanvasRenderingContext2D, color: string){
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x,this.history[i].y)
        }
        context.strokeStyle = color;
        context.stroke();
    }
    update(){
        this.timer--;
        if(this.timer>=1){
            const x = Math.floor(this.pos.x / this.effect.cellSize);
            const y = Math.floor(this.pos.y / this.effect.cellSize);
            const index = y * this.effect.cols + x;
            if(this.effect.flowField[index]){
                this.newAngle = this.effect.flowField[index].colorAngle;
                if (this.angle > this.newAngle) {
                    this.angle -= this.angleCorrector;
                } else if (this.angle < this.newAngle) {
                    this.angle += this.angleCorrector;
                } else {
                    this.angle = this.newAngle;
                }
                
            }
    
            this.speed.x = Math.cos(this.angle);
            this.speed.y = Math.sin(this.angle);
            this.pos.x += this.speed.x * this.speedModifier;
            this.pos.y += this.speed.y * this.speedModifier;
            // console.log(this.speed.x * this.speedModifier)
            this.history.push({x: this.pos.x, y: this.pos.y})
            if(this.history.length > this.maxLength){
                this.history.shift();
            }
        }else if(this.history.length > 1){
            this.history.shift();
        }else{
            this.reset();
        }
    }
    reset(){

        let attempts = 0;
        let resetSuccess = false;

        while(attempts < 50 && !resetSuccess){
            attempts++;
            const testIndex = Math.floor(Math.random() * this.effect.flowField.length);
            if (this.effect.flowField[testIndex] && this.effect.flowField[testIndex].alpha > 0) {
                this.pos = {
                    x: this.effect.flowField[testIndex].x,
                    y: this.effect.flowField[testIndex].y
                }
                this.history = [{x: this.pos.x, y: this.pos.y}]
                this.timer = this.maxLength * 2;
                resetSuccess = true;
            }
        }   
        if(!resetSuccess){
            this.pos.x = Math.random() * this.effect.width;
            this.pos.y = Math.random() * this.effect.height;
            this.history = [{x: this.pos.x, y: this.pos.y}]
            this.timer = this.maxLength * 2;
        }
        
    }
}

export default Particle