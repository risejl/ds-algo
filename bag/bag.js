// implement array-based bag using ES6 class syntax
/*
class MyBag {
  constructor() {
    this.list = [];
  }

  isEmpty() {
    if (this.list.length === 0) return true;
    else return false;
  }

  size() {
    return this.list.length;
  }

  add(value) {
    this.list.push(value);
  }

  print() {
    this.list.map((item) => console.log(item)); 
  }
} 
*/

// implement array-based bag using vanilla js
/*
const MyBag = function () {
  this.list = [];
  this.isEmpty = function () {
    if (this.list.length === 0) return true;
    else return false;
  }
  this.size = function () {
    return this.list.length;
  }
  this.add = function (value) {
    this.list.push(value);
  }
  this.print = function () {
    this.list.map((item) => {
      console.log(item);
    });
  }
}

// test code
let bag = new MyBag();
console.log(bag.isEmpty());
bag.add(1);
console.log(bag.isEmpty());
console.log(bag.size());
bag.add(2);
bag.print();
*/

/*
// implement linkedlist-based bag using ES6 class syntax
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyBag {
  constructor(head = null) {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) return true;
    else return false;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      this.head.next = node;
      this.head = node;
    }
  }
 
  size() {
    if (this.isEmpty()) return 0;
    else {
      let p = this.head;
      let counter = 0;
      while (p !== null) {
        console.log(p);
        p = p.next;
        counter += 1;
      }
      return counter;
    }
  }

  print() {
    if (this.isEmpty()) return false;
    else {
      let p = this.head;
      while (p !== null) {
        console.log(p);
        p = p.next;
      }
    }
  }
}
*/

// implement linkedlist-based bag using vanilla js
const Node = function (value, next = null) {
  this.value = value;
  this.next = next;
}

const MyBag = function (head = null) {
  this.head = null;
  
  this.isEmpty = function () {
    if (this.head === null) return true;
    else return false;
  }

  this.add = function (value) {
    const node = new Node(value);
    if (this.head === null) this.head = node;
    else {
      this.head.next = node;
      this.head = node;
    }
  }
 
  this.size = function () {
    if (this.isEmpty()) return 0;
    else {
      let p = this.head;
      let counter = 0;
      while (p !== null) {
        console.log(p);
        p = p.next;
        counter += 1;
      }
      return counter;
    }
  }

  this.print = function () {
    if (this.isEmpty()) return false;
    else {
      let p = this.head;
      while (p !== null) {
        console.log(p);
        p = p.next;
      }
    }
  }
}


// test code
let bag = new MyBag();
console.log(bag.isEmpty());
bag.add(1);
console.log(bag.isEmpty());
console.log(bag.size());
bag.add(2);
bag.print();