import type { Draw2DObject } from "../properties/DrawObject.js";
import { Vector2D } from "../properties/Vector2D.js";

export class Sprite implements Draw2DObject {
  position: Vector2D;
  image: CanvasImageSource;
  size: Vector2D;

  constructor(
    image: CanvasImageSource,
    position = new Vector2D(),
    size = new Vector2D()
  ) {
    this.image = image;
    this.position = position;
    this.size = size;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y } = this.position;
    const { x: dw, y: dh } = this.size;
    ctx.drawImage(this.image, x, y, dw, dh);
  }
}
