// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let pointer = this.head;

    while (pointer) {
      pointer = pointer.next;
      count += 1;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let pointer = this.head;

    while (pointer.next) {
      pointer = pointer.next;
    }

    return pointer;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head && this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (!previous) {
      this.head = null;
    } else {
      previous.next = null;
    }
  }

  insertLast(data) {
    if (!this.head) return this.insertFirst(data);
    this.getLast().next = new Node(data);
  }

  getAt(position) {
    let count = 0;
    let current = this.head;

    while (current && count < position) {
      current = current.next;
      count += 1;
    }

    return current;
  }

  removeAt(position) {
    if (!this.head) return;
    if (position === 0) return (this.head = this.head.next);

    let count = 0;
    let previous = this.head;
    let current = this.head;

    while (current && count < position) {
      previous = current;
      current = current.next;
      count += 1;
    }

    previous.next = current ? current.next : null;
  }

  insertAt(data, position) {
    const node = new Node(data);
    if (!this.head) return (this.head = node);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const previous = this.getAt(position - 1) || this.getLast();
    node.next = previous.next;
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter += 1;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
