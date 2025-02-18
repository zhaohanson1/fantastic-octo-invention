import { Sprite } from "./graphics/Sprite.js";
import { Vector2D } from "./graphics/Vector2D.js";

class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    if (this.canvas.getContext("2d") === null) {
      throw new Error("Context missing.");
    }

    this.resize();
    window.addEventListener("resize", () => this.resize());
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

  render() {
    // this.drawRectangle(50, 50, 200, 100);
    const mozLogo = document.createElement("img");

    mozLogo.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/800px-Firefox_logo%2C_2019.svg.png";
    const mozLogoSpirte = new Sprite(
      mozLogo,
      new Vector2D(500, 500),
      new Vector2D(48, 48)
    );
    mozLogoSpirte.draw(this.ctx);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const myCanvas = new Canvas();
  myCanvas.render();
});
