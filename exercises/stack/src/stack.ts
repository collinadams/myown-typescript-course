interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private layers: T[] = [];
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  push(maybeItem: T | T[]): IStack<T> {
    if (maybeItem instanceof Array) {
    // if (Array.isArray(maybeItem)) {
      this.layers.push(...maybeItem)
      // this.layers = this.layers.concat(maybeItem);
    } else {
      this.layers.push(maybeItem);
    }
    return this;
  };
  pop(): T | undefined {
    if (this.layers.length) {
      return this.layers.pop();
    } else {
      return;
    }
  };
  length(): number {
    return this.layers.length;
  };
  print(): void {
    console.log(this.layers.join(', '));
  };
}