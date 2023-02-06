// implement array-based stack by ES6 class syntax
class MyStack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  // is stack empty
  isEmpty() {
    if (this.top === -1) return true;
    else return false;
  }

  // push an element to a stack
  push(value) {
    this.top += 1;
    this.stack.push(value);
  }

  // pop an element from a stack
  pop() {
    if (this.isEmpty()) return false;
    else {
      this.top--;
      return this.stack.pop();
    }
  }

  // get the top element of a stack
  getTop() {
    if (this.isEmpty()) return false;
    else return this.stack[this.top];
  }
  
  // print all elements
  print() {
    if (this.isEmpty()) return false;
    else {
      this.stack.map((item) => console.log(item));
    }
  }
  
  // peek an element at a given position
  peek(pos) {
    if (this.isEmpty()) return false;
    else return this.stack[pos];
  } 
} 




// implement linkedList-based stack by ES6 class syntax
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyStack {
  constructor(head = null) {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) return true;
    else return false;
  }

  push(value, next = null) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (this.isEmpty()) return false;
    else {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
  }

  getTop() {
    if (this.isEmpty()) return false;
    else return this.head;
  }

  peek(pos) {
    let counter = 0;
    let p = this.head;
    while (p !== null) {
      if (counter === pos) return p;
      else {
        p = p.next;
        counter += 1;
      }
    }
    return false;
  }

  print() {
    let p = this.head;
    while (p !== null) {
      console.log(p);
      p = p.next;
    }
  }
} 
