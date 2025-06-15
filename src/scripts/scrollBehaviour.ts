// src/scripts/ScrollAnimationBehaviour.ts
import { MutableRefObject } from "react";

export default class ScrollAnimationBehaviour {
  private progress = 0;
  private targetProgress = 0;
  private maxProgress: number;
  private animationFrameId: number | null = null;
  private lastTouchY = 0;
  private shouldProgress = true;
  private timeoutRef: NodeJS.Timeout | null = null;
  private readonly sensitivity: number;
  private readonly progressChangeCallback: (progress: number) => void;

  constructor(
    maxProgress: number,
    initialProgress: number,
    sensitivity: number,
    progressChangeCallback: (progress: number) => void
  ) {
    this.maxProgress = maxProgress;
    this.progress = initialProgress;
    this.targetProgress = initialProgress;
    this.sensitivity = sensitivity;
    this.progressChangeCallback = progressChangeCallback;
  }

  public handleWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    this.updateTargetProgress(delta * this.sensitivity);
  }

  public handleTouchStart(event: TouchEvent) {
    this.lastTouchY = event.touches[0].clientY;
  }

  public handleTouchMove(event: TouchEvent) {
    const currentTouchY = event.touches[0].clientY;
    const deltaY = this.lastTouchY - currentTouchY;
    this.lastTouchY = currentTouchY;
    this.updateTargetProgress(deltaY * (this.sensitivity / 3));
  }

  private updateTargetProgress(delta: number) {
    if (!this.shouldProgress) return;
    
    const newProgress = Math.max(
      0,
      Math.min(this.maxProgress, this.targetProgress + delta)
    );
    
    if (newProgress !== this.targetProgress) {
      this.targetProgress = newProgress;
      this.startAnimation();
    }
  }

  private startAnimation() {
    if (this.animationFrameId !== null) return;
    
    const animate = () => {
      if (Math.abs(this.progress - this.targetProgress) > 0.1) {
        this.progress += (this.targetProgress - this.progress) * 0.1;
        this.progressChangeCallback(this.progress);
        this.animationFrameId = requestAnimationFrame(animate);
      } else {
        this.progress = this.targetProgress;
        this.progressChangeCallback(this.progress);
        this.animationFrameId = null;
      }
    };
    
    this.animationFrameId = requestAnimationFrame(animate);
  }

  public resetShouldProgress() {
    if (this.timeoutRef) clearTimeout(this.timeoutRef);
    this.shouldProgress = false;
    this.timeoutRef = setTimeout(() => {
      this.shouldProgress = true;
      this.timeoutRef = null;
    }, 300);
  }

  public cleanup() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.timeoutRef) clearTimeout(this.timeoutRef);
  }
}