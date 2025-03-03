import type { Object2D } from "../properties/Object2D";

// Keeps track of all the objects in the scene
export class Scene {
  sceneObjects: Object2D[] = [];

  addObject(object: any) {
    this.sceneObjects.push(object);
  }

  removeObject(object: any) {
    const index = this.sceneObjects.indexOf(object);
    if (index > -1) {
      this.sceneObjects.splice(index, 1);
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.sceneObjects.forEach((object) => object.draw(ctx));
  }

  getCollisionObjects() {
    return this.sceneObjects.filter((object) => object.isCollidable);
  }
}
