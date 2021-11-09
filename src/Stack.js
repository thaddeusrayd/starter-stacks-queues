// creates a node contained the data and a reference to the next item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // create a new node,
    // add data to the new node, and
    // have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
  }
}
