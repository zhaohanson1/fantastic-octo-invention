import { Line } from "./graphics/primitives/Line";
import { Timer } from "./timer";

export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  timer: Timer;
  line1: Line;

  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    if (this.canvas.getContext("2d") === null) {
      throw new Error("Context missing.");
    }

    this.timer = new Timer();
    this.timer.start();

    this.line1 = new Line(100, 100, 200, 200);

    this.resize();
    window.addEventListener("resize", () => this.resize.bind(this));
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
    // const mozLogo = document.createElement("img");

    // mozLogo.src =
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/800px-Firefox_logo%2C_2019.svg.png";
    // const mozLogoSpirte = new Sprite(
    //   mozLogo,
    //   new Vector2D(500, 500),
    //   new Vector2D(48, 48)
    // );

    // mozLogo.onload = () => {
    //   mozLogoSpirte.draw(this.ctx);
    // };
    this.line1.draw(this.ctx);

    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.line1.x1 = this.line1.x1 + this.timer.deltaTime * 100;
      this.line1.draw(this.ctx);
      console.log(this.line1.point1.toString());
      this.render();
    });
  }
}
