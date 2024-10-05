import Particle from "./particles";
import { Vector } from "./types";

type FlowType = { x: number; y: number; colorAngle: number; alpha: number };
type ColorType = {
  bgColor: string;
  accentColor: string;
  mainColor: string;
};

export default class Effect {
  mousePosition: Vector;
  canvas: HTMLCanvasElement;
  height: number;
  width: number;
  particles: Particle[];
  totalParticles: number;
  cellSize: number;
  rows: number;
  cols: number;
  flowField: FlowType[] = [];
  debug: boolean;
  firstRun: boolean;
  text: string;
  ctx: CanvasRenderingContext2D;
  shouldAnimate: boolean;
  colors: ColorType = {
    bgColor: "#000000",
    accentColor: "#FFFFFF",
    mainColor: "#0000FF",
  };

  private lastFrameTime: number = 0;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    text: string,
    shouldAnimate: boolean
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.particles = [];
    this.totalParticles = 100; // Start with fewer particles
    this.cellSize = 1;
    this.rows = 0;
    this.cols = 0;
    this.flowField = [];
    this.debug = false;
    this.text = text;
    this.firstRun = true;
    this.mousePosition = { x: 0, y: 0 };
    this.shouldAnimate = shouldAnimate;

    this.adjustParticleCount();

    window.addEventListener("mousemove", this.throttleMouseMove);
    window.addEventListener("keydown", (e) => {
      if (e.key === "D") this.debug = !this.debug;
    });
    // window.addEventListener("resize", (e) => {
    //   const target = e.target as Window;
    //   this.resize(target.innerWidth, target.innerHeight);
    // });
  }

  private adjustParticleCount() {
    const frameTime = performance.now() - this.lastFrameTime;
    if (frameTime < 16) {
      this.totalParticles = Math.min(this.totalParticles + 10, 1000); // Increase particles gradually
    } else if (frameTime > 33) {
      this.totalParticles = Math.max(this.totalParticles - 10, 100); // Decrease particles gradually
    }
    this.lastFrameTime = performance.now();
  }

  private throttleMouseMove = (() => {
    let lastTime = 0;
    return (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime >= 100) {
        this.mousePosition = { x: e.pageX, y: e.pageY };
        lastTime = now;
      }
    };
  })();

  private drawText(useGradient: boolean = false) {
    this.ctx.font = "bold 100px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    const x = this.canvas.width * 0.5;
    const y = this.canvas.height / 2;

    if (useGradient) {
        const gradient = this.ctx.createLinearGradient(
            this.width * 0.3,
            this.height * 0.3,
            this.width - this.width * 0.3,
            this.height - this.height * 0.3
        );
        gradient.addColorStop(0.0, "red");
        gradient.addColorStop(0.4, "blue");
        gradient.addColorStop(1.0, "green");
        this.ctx.fillStyle = gradient;
    } else {
        this.ctx.fillStyle = this.shouldAnimate ? this.colors.mainColor : this.colors.accentColor;
    }

    this.ctx.strokeStyle = this.colors.bgColor;
    
    this.ctx.fillText(this.text, x, y);
    this.ctx.strokeText(this.text, x, y);
}

public changeAnimationState(newState: boolean) {
    this.shouldAnimate = newState;
    // console.log('Animation state changed:', this.shouldAnimate); 
}



  public changeColor({
    bgColor = this.colors.bgColor,
    accentColor = this.colors.accentColor,
    mainColor = this.colors.mainColor,
  }: ColorType) {
    this.colors = { accentColor, bgColor, mainColor };
  }

  private init() {
    this.particles = [];
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flowField = [];
    this.drawText(true);

    const pixels = this.ctx.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.cellSize) {
      for (let x = 0; x < this.width; x += this.cellSize) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index + 0];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const grayscale = (red + green + blue) / 3;
        const colorAngle = Number(((grayscale / 255) * 6.28).toFixed(2));
        this.flowField.push({ x, y, colorAngle, alpha });
      }
    }

    // Create particles gradually
    const createParticles = () => {
      if (this.particles.length < this.totalParticles) {
        this.particles.push(new Particle(this));
        requestAnimationFrame(createParticles);
      } else {
        this.particles.forEach((p) => p.reset());
      }
    };
    createParticles();
  }

  public render() {
    this.adjustParticleCount();

    if (this.firstRun) {
        this.firstRun = false;
        this.init();
    }
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawText(this.debug);

    // Render particles only if shouldAnimate is true
    if (this.shouldAnimate) {
        // this.ctx.strokeStyle = ;
        this.ctx.stroke();
        this.particles.forEach((particle) => {
            particle.update();
            particle.draw(this.ctx, this.colors.accentColor as string);
        });
    }
}




  public resize(w: number, h: number) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.render();
  }
}
