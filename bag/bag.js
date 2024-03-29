// implement array-based bag by ES6 class syntax
class MyBag {
  constructor() {
    this.list = [];
  }

  // check whether the bag is empty
  isEmpty() {
    if (this.list.length === 0) return true;
    else return false;
  }

  // return bag size
  size() {
    return this.list.length;
  }
  
  // add an element to the end
  add(value) {
    this.list.push(value);
  }

  // print all elements
  print() {
    this.list.map((item) => console.log(item)); 
  }
} 


// implement linkedlist-based bag by ES6 class syntax
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