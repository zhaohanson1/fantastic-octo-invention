import { Line } from "../graphics/Line";

import { Vector2D } from "../properties/Vector2D";
import { Object2D } from "../properties/Object2D";
import { Scene } from "../scene/scene";
import { Collision2D } from "../properties/Collision2D";

export class MoveableLine extends Object2D {
  line: Line;
  speed = 1;

  direction: Vector2D = new Vector2D(0, 0);

  constructor(x1: number, y1: number, x2: number, y2: number) {
    const width = Math.abs(x2 - x1);
    const height = Math.abs(y2 - y1);

    super(x1, y1, width, height);

    this.line = new Line(x1, y1, x2, y2);
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

  updatePosition(scene?: Scene): void {
    if (!scene) {
      return; // No scene to check for collision
    }

    const newPosition = new Vector2D(
      this.position.x + this.direction.x * this.speed,
      this.position.y + this.direction.y * this.speed
    );

    const newBottomRight = new Vector2D(
      newPosition.x + this.size.x,
      newPosition.y + this.size.y
    );

    const topLeft = new Vector2D(newPosition.x, newPosition.y);
    const bottomRight = new Vector2D(newBottomRight.x, newBottomRight.y);
    const newCollision = new Collision2D(topLeft, bottomRight);

    const collidableObjects = scene
      .getCollidableObjects()
      .filter((object) => object !== this && object.isCollidable);

    // Check for collision for
    const hasCollision = collidableObjects.some(
      (object) =>
        object.isCollidable && newCollision.isCollidingWith(object.collision!)
    );

    if (hasCollision) {
      return;
    }

    this.line.x1 += this.direction.x * this.speed;
    this.line.x2 += this.direction.x * this.speed;
    this.line.y1 += this.direction.y * this.speed;
    this.line.y2 += this.direction.y * this.speed;
    this.position.x = this.line.x1;
    this.position.y = this.line.y1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.line.draw(ctx);
  }
}
