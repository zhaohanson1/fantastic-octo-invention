import { MoveableLine } from "./assets/MoveableLine";
import type { Draw2DObject } from "./properties/DrawObject";
import { Line } from "./graphics/Line";
import { Sprite } from "./graphics/Sprite";
import { Vector2D } from "./properties/Vector2D";
import { Timer } from "./timer";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  timer: Timer;
  line1?: Line;

  objectArray: Draw2DObject[] = [];

  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    if (this.canvas.getContext("2d") === null) {
      throw new Error("Context missing.");
    }

    this.timer = new Timer();
    this.timer.start();

    const line1 = new Line(100, 100, 200, 200);
    const mline1 = new MoveableLine(line1);

    const mozLogo = document.createElement("img");

    mozLogo.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/800px-Firefox_logo%2C_2019.svg.png";
    const mozLogoSpirte = new Sprite(
      mozLogo,
      new Vector2D(500, 500),
      new Vector2D(48, 48)
    );

    this.objectArray.push(mozLogoSpirte);
    this.objectArray.push(mline1);

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
    this.objectArray.forEach((object) => object.draw(this.ctx));
    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.objectArray.forEach((object) => object.draw(this.ctx));
      this.render();
    });
  }
}
