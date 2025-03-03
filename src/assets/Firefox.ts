import { Vector2D } from "../properties/Vector2D";
import { Sprite } from "../graphics/Sprite";

import { Object2D } from "../properties/Object2D";

export class Firefox extends Object2D {
  firefoxSprite: Sprite | null = null;

  constructor(position: Vector2D, size: Vector2D) {
    super(position.x, position.y, size.x, size.y);

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
    return new Sprite(img, this.position, this.size);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.firefoxSprite) {
      this.firefoxSprite.draw(ctx);
    }
  }
}
