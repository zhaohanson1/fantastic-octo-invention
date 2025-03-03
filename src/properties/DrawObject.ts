import type { Scene } from "../scene/scene";

export interface Draw2DObject {
  draw(ctx: CanvasRenderingContext2D, scene?: Scene): void; // This method will be implemented by the classes that implement this interface.
}
