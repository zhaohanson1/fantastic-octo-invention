import { Vector2D } from "../properties/Vector2D";
import { Sprite } from "../graphics/Sprite";
import { Collision2D } from "../properties/Collision2D";

import { Object2D } from "../properties/Object2D";

export class Firefox extends Object2D {
  firefoxSprite: Sprite | null = null;
  position: Vector2D;
  size: Vector2D;
  collision: Collision2D;

  constructor(position: Vector2D, size: Vector2D) {
    super(position.x, position.y, size.x, size.y);
    this.position = position;
    this.size = size;

    const topLeft = new Vector2D(this.position.x, this.position.y);
    const bottomRight = new Vector2D(
      this.position.x + this.size.x,
      this.position.y + this.size.y
    );

    this.collision = new Collision2D(topLeft, bottomRight);

    this.loadImage().then((sprite) => {
      this.firefoxSprite = sprite;
    });
  }

  async loadImage() {
    const img = new Image();
    const url =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/800px-Firefox_logo%2C_2019.svg.png";
    await new Promise((r) => {
      img.onload = r;
      img.src = url;
    });
    return new Sprite(img, new Vector2D(500, 500), new Vector2D(48, 48));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.firefoxSprite) {
      this.firefoxSprite.draw(ctx);
    }
  }
}
