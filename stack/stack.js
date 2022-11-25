// implement array-based stack using ES6 class syntax
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

// implement array-based stack using vanilla js
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

// test code
let stack = new MyStack();
console.log('push 1 and 2 to stack');
stack.push(1);
stack.push(2);
console.log('is stack empty?');
console.log(stack.isEmpty());
console.log('pop 2 out of stack');
console.log(stack.pop());
console.log('get the top element of stack:')
console.log(stack.getTop());
console.log('push 3 to stack:');
stack.push(3);
stack.print();
console.log('push 4 to stack');
stack.push(4);
console.log('get the third element:')
console.log(stack.peek(2));
*/

// implement linkedList-based stack using ES6 class syntax
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

// implement linkedlist-based-stack using vaniila js
const Node = function (value, next = null) {
  this.value = value;
  this.next = next;
}

const MyStack = function (head = null) {
  this.head = null;

  this.isEmpty = function () {
    if (this.head === null) return true;
    else return false;
  }

  this.push = function (value, next = null) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  this.pop = function () {
    if (this.isEmpty()) return false;
    else {
      const node = this.head;
      this.head = this.head.next;
      return node;
    }
  }

  this.getTop = function () {
    if (this.isEmpty()) return false;
    else return this.head;
  }

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

  this.print = function () {
    let p = this.head;
    while (p !== null) {
      console.log(p);
      p = p.next;
    }
  }
}

// test code
let stack = new MyStack();
console.log('stack is empty:');
console.log(stack.isEmpty());
console.log('add element 1 and 2:')
stack.push(1);
stack.push(2);
stack.print();
console.log('get top element from stack:');
console.log(stack.getTop());
console.log('add element 3:');
stack.push(3);
console.log('get second element:');
console.log(stack.peek(1));
console.log('pop element:');
console.log(stack.pop());
console.log('stack is empty:');
console.log(stack.isEmpty());