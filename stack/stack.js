// implement array-based stack by ES6 class syntax
/*
class MyStack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  isEmpty() {
    if (this.top === -1) return true;
    else return false;
  }

  push(value) {
    this.top += 1;
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) return false;
    else {
      this.top--;
      return this.stack.pop();
    }
  }

  getTop() {
    if (this.isEmpty()) return false;
    else return this.stack[this.top];
  }
  
  print() {
    if (this.isEmpty()) return false;
    else {
      this.stack.map((item) => console.log(item));
    }
  }
  
  peek(pos) {
    if (this.isEmpty()) return false;
    else return this.stack[pos];
  } 
} 
*/

// implement array-based stack by vanilla js
/*
const MyStack = function () {
  this.stack = [];
  this.top = -1;

  this.isEmpty = function () {
    if (this.top === -1) return true;
    else return false;
  }

  this.push = function (value) {
    this.top += 1;
    this.stack.push(value);
  }

  this.pop = function () {
    if (this.isEmpty()) return false;
    else {
      this.top--;
      return this.stack.pop();
    }
  }

  this.getTop = function () {
    if (this.isEmpty()) return false;
    else return this.stack[this.top];
  } 

  this.print = function () {
    if (this.isEmpty()) return false;
    else {
      this.stack.map((item) => console.log(item));
    }
  }

  this.peek = function (pos) {
    if (this.isEmpty()) return false;
    else return this.stack[pos];
  }
}
*/

// implement linkedList-based stack by ES6 class syntax
/*
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
*/

// implement linkedlist-based-stack by vaniila js
const Node = function (value, next = null) {
  this.value = value;
  this.next = next;
}

const MyStack = function (head = null) {
  this.head = null;

  // whether a stack is empty
  this.isEmpty = function () {
    if (this.head === null) return true;
    else return false;
  }

  // push an element to the top of a stack
  this.push = function (value, next = null) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // pop an element from the top of a stack
  this.pop = function () {
    if (this.isEmpty()) return false;
    else {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
  }

  // return the element of the top of a stack
  this.getTop = function () {
    if (this.isEmpty()) return false;
    else return this.head;
  }

  // return the element of a given position
  this.peek = function (pos) {
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

  // print all elements
  this.print = function () {
    let p = this.head;
    while (p !== null) {
      console.log(p);
      p = p.next;
    }
  }
}
