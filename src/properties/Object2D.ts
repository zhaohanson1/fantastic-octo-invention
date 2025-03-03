import { Collision2D } from "./Collision2D";
import type { Draw2DObject } from "./DrawObject";
import type { KeyboardHandlerInterface } from "./KeyboardHandlerInterface";
import { Vector2D } from "./Vector2D";

export abstract class Object2D
  implements Draw2DObject, KeyboardHandlerInterface
{
  position: Vector2D;
  size: Vector2D;
  collision: Collision2D | null = null;

  get isCollidable(): boolean {
    return this.collision !== null;
  }

  constructor(x: number, y: number, width: number, height: number) {
    this.position = new Vector2D(x, y);
    this.size = new Vector2D(width, height);
    this.bindKeyEvents();
  }

  bindKeyEvents(): void {
    window.addEventListener("keydown", (e) => {
      this.keydown(e.key);
    });

    window.addEventListener("keyup", (e) => {
      this.keyup(e.key);
    });
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;

  keydown(_key: string): void {
    // Default implementation (optional)
  }

  keyup(_key: string): void {
    // Default implementation (optional)
  }
}
