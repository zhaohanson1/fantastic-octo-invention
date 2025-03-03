import { describe, it, expect } from "vitest";
import { Collision2D } from "../properties/Collision2D";
import { Vector2D } from "../properties/Vector2D";

describe("Collision2D", () => {
  it("should detect collision when rectangles overlap", () => {
    const rect1 = new Collision2D(new Vector2D(0, 0), new Vector2D(10, 10));
    const rect2 = new Collision2D(new Vector2D(5, 5), new Vector2D(15, 15));
    expect(rect1.isCollidingWith(rect2)).toBe(true);
  });

  it("should not detect collision when rectangles do not overlap", () => {
    const rect1 = new Collision2D(new Vector2D(0, 0), new Vector2D(10, 10));
    const rect2 = new Collision2D(new Vector2D(11, 11), new Vector2D(20, 20));
    expect(rect1.isCollidingWith(rect2)).toBe(false);
  });

  it("should detect collision when one rectangle is inside another", () => {
    const rect1 = new Collision2D(new Vector2D(0, 0), new Vector2D(20, 20));
    const rect2 = new Collision2D(new Vector2D(5, 5), new Vector2D(15, 15));
    expect(rect1.isCollidingWith(rect2)).toBe(true);
  });

  it("should not detect collision when rectangles are adjacent but not overlapping", () => {
    const rect1 = new Collision2D(new Vector2D(0, 0), new Vector2D(10, 10));
    const rect2 = new Collision2D(new Vector2D(10, 10), new Vector2D(20, 20));
    expect(rect1.isCollidingWith(rect2)).toBe(false);
  });
});
