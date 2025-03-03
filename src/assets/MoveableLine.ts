import type { Line } from "../graphics/Line";
import type { KeyboardHandlerInterface } from "../properties/KeyboardHandlerInterface";
import type { Draw2DObject } from "../properties/DrawObject";
import { Vector2D } from "../properties/Vector2D";

export class MoveableLine implements KeyboardHandlerInterface, Draw2DObject {
  line: Line;
  speed = 1;

  direction: Vector2D = new Vector2D(0, 0);

  constructor(line: Line) {
    this.line = line;
    document.addEventListener("keydown", (e) => {
      this.keydown(e.key);
    });

    document.addEventListener("keyup", (e) => {
      this.keyup(e.key);
    });
  }

  keydown(key: string): void {
    switch (key) {
      case "ArrowUp":
        this.direction.y = -1;
        break;
      case "ArrowDown":
        this.direction.y = 1;
        break;
      case "ArrowLeft":
        this.direction.x = -1;
        break;
      case "ArrowRight":
        this.direction.x = 1;
        break;
    }
  }

  keyup(key: string): void {
    switch (key) {
      case "ArrowUp":
      case "ArrowDown":
        this.direction.y = 0;
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.direction.x = 0;
        break;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.line.x1 += this.direction.x * this.speed;
    this.line.x2 += this.direction.x * this.speed;
    this.line.y1 += this.direction.y * this.speed;
    this.line.y2 += this.direction.y * this.speed;
    this.line.draw(ctx);
  }
}
