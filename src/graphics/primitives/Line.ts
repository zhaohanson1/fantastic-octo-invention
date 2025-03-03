import { Vector2D } from "../Vector2D";

export class Line {
  point1: Vector2D;
  point2: Vector2D;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.point1 = new Vector2D(x1, y1);
    this.point2 = new Vector2D(x2, y2);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.point1.x, this.point1.y);
    ctx.lineTo(this.point2.x, this.point2.y);
    ctx.stroke();
  }

  get x1() {
    return this.point1.x;
  }

  get y1() {
    return this.point1.y;
  }

  get x2() {
    return this.point2.x;
  }

  get y2() {
    return this.point2.y;
  }

  set x1(value: number) {
    this.point1.x = value;
  }

  set y1(value: number) {
    this.point1.y = value;
  }

  set x2(value: number) {
    this.point2.x = value;
  }

  set y2(value: number) {
    this.point2.y = value;
  }
}
