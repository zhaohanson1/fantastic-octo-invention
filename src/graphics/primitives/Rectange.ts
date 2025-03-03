import { Vector2D } from "../Vector2D";

export class Rectangle {
  position: Vector2D;
  size: Vector2D;

  constructor(x: number, y: number, width: number, height: number) {
    this.position = new Vector2D(x, y);
    this.size = new Vector2D(width, height);
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y } = this.position;
    const { x: w, y: h } = this.size;
    ctx.strokeRect(x, y, w, h);
  }
}
