type Node<T> = {
  value: T;
  next?: Node<T>;
};
export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(item: T): void {
    if (!this.head) {
      this.length = 1;
      this.head = this.tail = { value: item };
    } else {
      let node = { value: item, next: this.head } as Node<T>;
      this.length++;
      this.head = node;
    }
    console.log(this.head, this.tail);
  }
  insertAt(item: T, idx: number): void {
    if (idx >= length) {
      this.append(item);
    } else if (idx <= 0) {
      this.prepend(item);
    } else {
      let node = this.head;
      if (!node) {
        this.append(item);
        return;
      }
      for (let i = 1; i < idx; i++) {
        if (node?.next) {
          node = node?.next;
        }
      }
      let next = node?.next;
      node.next = { value: item, next: next };
      this.length++;
    }
  }
  append(item: T): void {
    if (!this.tail) {
      this.prepend(item);
    } else {
      let node = { value: item } as Node<T>;
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  remove(item: T): T | undefined {
    let node = this.head;
    if (!node) {
      return undefined;
    }
    let target = undefined;
    if (node.value === item) {
      this.head = node.next;
      this.length--;
      return node.value;
    }
    for (let i = 1; i < this.length; i++) {
      console.log(node);
      if (node.next?.value === item) {
        console.log(node);
        if (node.next?.next) {
          target = node.next;
          node.next = node.next.next;
          this.length--;
          return target.value;
        } else {
          target = node.next;
          node.next = undefined;
          this.length--;
          return target.value;
        }
      }
      if (node.next) {
        node.next;
      }
    }
    return undefined;
  }
  get(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }
    let node = this.head;
    for (let i = 1; i <= idx; i++) {
      node = node?.next;
    }
    return node?.value;
  }
  removeAt(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined;
    }
    let node = this.head;
    if (!node) {
      return undefined;
    }
    if (idx === 0) {
      let target = node;
      this.head = node.next;
      this.length--;
      return target.value;
    }
    for (let i = 1; i < idx; i++) {
      if (node?.next) {
        node = node.next;
      }
    }
    let target = node.next;
    node.next = node?.next?.next;
    this.length--;
    return target?.value;
  }
}
