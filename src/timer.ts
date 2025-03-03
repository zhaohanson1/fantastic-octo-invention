export class Timer {
  private lastTime: number;
  public deltaTime: number;

  constructor() {
    this.lastTime = 0;
    this.deltaTime = 0;
  }

  start() {
    this.lastTime = performance.now();
    this.update();
  }

  private update() {
    requestAnimationFrame(() => {
      const currentTime = performance.now();
      this.deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
      this.lastTime = currentTime;

      // Call update again on the next frame
      this.update();
    });
  }
}

// Usage
// const timer = new Timer();
// timer.start();

// You can access timer.deltaTime to get the time elapsed between frames
