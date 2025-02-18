export class Vector2D {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // Add another vector to this vector and return a new vector
  add(vector: { x: number; y: number }) {
    return new Vector2D(this.x + vector.x, this.y + vector.y);
  }

  // Subtract another vector from this vector and return a new vector
  subtract(vector: { x: number; y: number }) {
    return new Vector2D(this.x - vector.x, this.y - vector.y);
  }

  // Multiply the vector by a scalar and return a new vector
  scale(scalar: number) {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }

  scaleX(scaleFactor: number) {
    // Scale along X-axis using matrix
    return new Vector2D(this.x * scaleFactor, this.y);
  }

  scaleY(scaleFactor: number) {
    // Scale along Y-axis using matrix
    return new Vector2D(this.x, this.y * scaleFactor);
  }

  // Divide the vector by a scalar and return a new vector
  divide(scalar: number) {
    if (scalar !== 0) {
      return new Vector2D(this.x / scalar, this.y / scalar);
    }
    return this; // Prevent division by zero
  }

  // Get the length (magnitude) of the vector
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // Normalize the vector (make it unit length) and return a new vector
  normalize() {
    const len = this.length();
    if (len > 0) {
      return new Vector2D(this.x / len, this.y / len);
    }
    return this; // Return original vector if length is zero
  }

  // Get the dot product of this vector and another vector
  dot(vector: { x: number; y: number }) {
    return this.x * vector.x + this.y * vector.y;
  }

  // Rotate about the another point
  rotate(deg: number, origin = new Vector2D(0, 0)) {
    const { x: ox, y: oy } = origin;

    const dx = this.x - ox;
    const dy = this.y - oy;

    const sinRotation = Math.sin(deg);
    const cosRotation = Math.cos(deg);

    return new Vector2D(
      cosRotation * dx + sinRotation * dy + ox,
      -sinRotation * dx + cosRotation * dy + oy
    );
  }

  // Convert the vector to a string for easy logging
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
