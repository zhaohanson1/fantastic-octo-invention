export interface KeyboardHandlerInterface {
  keydown?(key: string): void;
  keyup?(key: string): void;
  keypress?(key: string): void;
}
