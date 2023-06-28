export default class Queue<T> {
  public length: number;
  private head: T;

  constructor() {
    length = 0;
  }

  enqueue(item: T): void {}
  deque(): T | undefined {}
  peek(): T | undefined {}
}
