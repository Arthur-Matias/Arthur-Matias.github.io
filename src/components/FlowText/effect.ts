import isMobile from "../../scripts/checkMobile";
import { colorsMap, mainColors } from "../../scripts/tailwindColors";
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
  private mainColor = getComputedStyle(document.documentElement).getPropertyValue('--color-main');
  private bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bg');
  private accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent');  
  public changeText(text: string) {
    this.text = text; // Update the text
    this.render(); // Re-render with the new text
}
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
    this.totalParticles = 500; // Fixed number of particles
    this.cellSize = 1;
    this.rows = 0;
    this.cols = 0;
    this.flowField = [];
    this.debug = false;
    this.text = text;
    this.firstRun = true;
    this.mousePosition = { x: 0, y: 0 };
    this.shouldAnimate = shouldAnimate;

    // Initialize particles
    this.createParticles();

    window.addEventListener("mousemove", this.throttleMouseMove);
    window.addEventListener("keydown", (e) => {
      if (e.key === "D") this.debug = !this.debug;
    });
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
    this.ctx.font = `bold ${isMobile()?this.width/(this.width/70):this.height/2}px sans-serif`;
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
      mainColors.forEach((c, i) => {
        gradient.addColorStop(i / mainColors.length, colorsMap("500")[c]);
      });
      this.ctx.fillStyle = gradient;
    } else {
      this.ctx.fillStyle = this.shouldAnimate ? "transparent" : this.mainColor;
    }

    // this.ctx.strokeStyle = this.bgColor;
    this.ctx.fillText(this.text, x, y);
    // this.ctx.strokeText(this.text, x, y);
  }

  public changeAnimationState(newState: boolean) {
    this.shouldAnimate = newState;
  }

  public changeColor({
    bgColor = this.colors.bgColor,
    accentColor = this.colors.accentColor,
    mainColor = this.colors.mainColor,
  }: ColorType) {
    this.colors = { accentColor, bgColor, mainColor };
  }

  private init() {
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flowField = [];
    this.drawText(true);
  
    const pixels = this.ctx.getImageData(0, 0, this.width, this.height).data;
    this.drawText(false)
    // Ensure the flowField is filled based on rows and cols
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const index = (y * this.cellSize * this.width + x * this.cellSize) * 4;
        const red = pixels[index + 0];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const grayscale = (red + green + blue) / 3;
        const colorAngle = Number(((grayscale / 255) * 6.28).toFixed(2));
        this.flowField.push({ x: x * this.cellSize, y: y * this.cellSize, colorAngle, alpha });
      }
    }
  
    this.createParticles(); // Ensure fixed number of particles is created
  }
  

  private createParticles = () => {
    this.particles = Array.from({ length: this.totalParticles }, () => new Particle(this));
    this.particles.forEach((p) => p.reset());
  };

  public render() {
    if (this.firstRun) {
      this.firstRun = false;
      this.init();
    }
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawText(this.debug);

    // Render particles only if shouldAnimate is true
    if (this.shouldAnimate) {
      this.particles.forEach((particle) => {
        particle.update();
        particle.draw(this.ctx, this.mainColor);
      });
    }
  }

  public resize(w: number, h: number) {
    this.canvas.width = w;
    this.canvas.height = h;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.init(); // Reinitialize flow field and particles
  }
}
