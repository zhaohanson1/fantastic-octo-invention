import type { Scene } from "../scene/scene";
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
    const topLeft = this.position;
    const bottomRight = this.position.add(this.size);
    this.collision = new Collision2D(topLeft, bottomRight);

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

  updatePosition(_scene?: Scene): void {
    // Default implementation (optional)
  }

  update(scene?: Scene): void {
    this.updatePosition(scene);
    this.collision?.update(this.position);
  }

  keydown(_key: string): void {
    // Default implementation (optional)
    console.log("No Keydown event");
  }

  keyup(_key: string): void {
    // Default implementation (optional)
    console.log("No Keyup event");
  }

  abstract draw(ctx: CanvasRenderingContext2D, scene?: Scene): void;
}
