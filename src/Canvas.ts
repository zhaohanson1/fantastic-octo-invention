import { Vector2D } from "./properties/Vector2D";
import { Timer } from "./timer";
import { Firefox } from "./assets/Firefox";
import { MoveableLine } from "./assets/MoveableLine";
import { Scene } from "./scene/scene";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  timer: Timer;

  scene: Scene;

  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    if (this.canvas.getContext("2d") === null) {
      throw new Error("Context missing.");
    }

    this.timer = new Timer();
    this.timer.start();

    const mline1 = new MoveableLine(100, 100, 200, 200);

    const mozLogoSpirte = new Firefox(
      new Vector2D(100, 100),
      new Vector2D(48, 48)
    );

    this.scene = new Scene();
    this.scene.addObject(mline1);
    this.scene.addObject(mozLogoSpirte);

    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.render();
  }

  drawRectangle(
    x: number,
    y: number,
    width: number,
    height: number,
    color = "blue"
  ) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }

  init() {
    this.scene.render(this.ctx);
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.scene.render(this.ctx);
      this.render();
    });
  }
}
