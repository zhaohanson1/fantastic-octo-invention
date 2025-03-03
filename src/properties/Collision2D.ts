import { Vector2D } from "./Vector2D";

export class Collision2D {
  topLeft: Vector2D;
  bottomRight: Vector2D;

  constructor(topLeft: Vector2D, bottomRight: Vector2D) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
  }

  isCollidingWith(other: Collision2D) {
    return (
      this.topLeft.x < other.bottomRight.x &&
      this.bottomRight.x > other.topLeft.x &&
      this.topLeft.y < other.bottomRight.y &&
      this.bottomRight.y > other.topLeft.y
    );
  }

  update(newPosition: Vector2D) {
    const delta = newPosition.subtract(this.topLeft);
    this.topLeft = this.topLeft.add(delta);
    this.bottomRight = this.bottomRight.add(delta);
  }
}
