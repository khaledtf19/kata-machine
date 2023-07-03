type Node<T> = {
  vlaue: T;
  next?: Node<T>;
};
export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(item: T): void {
    let newNode = { vlaue: item } as Node<T>;
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      const oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    let newhead = this.head.next;
    let oldHead = this.head;
    if (!newhead) {
      this.head = this.tail = newhead;
      this.length--;
      return oldHead.vlaue;
    }
    this.head = newhead;
    this.length--;
    return oldHead?.vlaue;
  }

  peek(): T | undefined {
    return this.head?.vlaue;
  }
}
