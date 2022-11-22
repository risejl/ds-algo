// implement stack using ES6 class syntax
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
    this.top++;
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

// implement stack using vanilla js
function MyStack() {
  this.stack = [];
  this.top = -1;

  this.isEmpty = function() {
    if (this.top === -1) return true;
    else return false;
  }

  this.push = function(value) {
    this.top++;
    this.stack.push(value);
  }

  this.pop = function() {
    if (this.isEmpty()) return false;
    else {
      this.top--;
      return this.stack.pop();
    }
  }

  this.getTop = function() {
    if (this.isEmpty()) return false;
    else return this.stack[this.top];
  } 

  this.print = function() {
    if (this.isEmpty()) return false;
    else {
      this.stack.map((item) => console.log(item));
    }
  }

  this.peek = function(pos) {
    if (this.isEmpty()) return false;
    else return this.stack[pos];
  }
}

// test code
let stack = new MyStack();
console.log("push 1 and 2 to stack");
stack.push(1);
stack.push(2);
console.log("is stack empty?");
console.log(stack.isEmpty());
console.log("pop 2 out of stack");
console.log(stack.pop());
console.log("get the top element of stack:")
console.log(stack.getTop());
console.log("push 3 to stack:");
stack.push(3);
stack.print();
console.log("push 4 to stack");
stack.push(4);
console.log("get the third element:")
console.log(stack.peek(2));
