import { describe, it, expect } from "vitest";
import { Vector2D } from "../graphics/Vector2D";

describe("Vector2D", () => {
  it("should create a vector with default values", () => {
    const vector = new Vector2D();
    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);
  });

  it("should create a vector with given values", () => {
    const vector = new Vector2D(3, 4);
    expect(vector.x).toBe(3);
    expect(vector.y).toBe(4);
  });

  it("should add two vectors", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(3, 4);
    const result = vector1.add(vector2);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  it("should subtract two vectors", () => {
    const vector1 = new Vector2D(5, 6);
    const vector2 = new Vector2D(3, 4);
    const result = vector1.subtract(vector2);
    expect(result.x).toBe(2);
    expect(result.y).toBe(2);
  });

  it("should scale a vector", () => {
    const vector = new Vector2D(2, 3);
    const result = vector.scale(2);
    expect(result.x).toBe(4);
    expect(result.y).toBe(6);
  });

  it("should divide a vector", () => {
    const vector = new Vector2D(4, 6);
    const result = vector.divide(2);
    expect(result.x).toBe(2);
    expect(result.y).toBe(3);
  });

  it("should normalize a vector", () => {
    const vector = new Vector2D(3, 4);
    const result = vector.normalize();
    expect(result.x).toBeCloseTo(0.6);
    expect(result.y).toBeCloseTo(0.8);
  });

  it("should calculate the dot product of two vectors", () => {
    const vector1 = new Vector2D(1, 2);
    const vector2 = new Vector2D(3, 4);
    const result = vector1.dot(vector2);
    expect(result).toBe(11);
  });

  it("should rotate a vector around the origin", () => {
    const vector = new Vector2D(1, 0);
    const result = vector.rotateDeg(90);
    expect(result.x).toBeCloseTo(0);
    expect(result.y).toBeCloseTo(1);
  });
});
