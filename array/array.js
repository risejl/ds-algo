// implement array using ES6 class syntax
/*
class MyArray {
  constructor() {
    this.list = [];
  }

  print() {
    this.list.map((item) => {
      console.log(item);
    });
  }

  add(value) {
    return this.list.push(value);
  }

  insert(value, pos) {
    let rear = this.list.slice(pos, this.list.length);
    let front = this.list.slice(0, pos);
    this.list = [...front, value, ...rear];
  }

  remove(pos) {
    return this.list.splice(pos,1);
  }

  search(value) {
    let pos = this.list.indexOf(value);
    if (pos === -1) {
      console.log("this element is not in the array");
      return false;
    } else return pos;
  }

  get(pos) {
    if (pos >= this.list.length) {
      console.log("index out of range");
      return false;
    } else return this.list[pos];
  }

  getMax() {
    return Math.max(...this.list);
  }

  getMin() {
    return Math.min(...this.list);
  }

  reverse() {
    return this.list.reverse();
  }

  shift(pos, direction) {
    if (direction === "left") {
      const right = this.list.slice(pos, this.list.length);
      return this.list.splice(0, pos, right);
    }
    if (direction === "right") {
      const left = this.list.slice(0, pos);
      return this.list.splice(pos, this.list.length, left);
    }
  }
}
*/

// implement array using vanilla js 
function MyArray() {
  this.arr = [];

  this.print = function() {
    this.arr.map((item) => {
      console.log(item);
    });
  }

  this.add = function(value) {
    return this.arr.push(value);
  }

  this.insert = function(value, pos) {
    const rear = this.arr.slice(pos,this.arr.length);
    const front = this.arr.slice(0, pos);
    this.arr = [...front, value, ...rear];
  }

  this.remove = function(pos) {
    return this.arr.splice(pos,1);
  }

  this.search = function(value) {
    const pos = this.arr.indexOf(value);
    if (pos === -1) {
      console.log("this element is not in the array");
      return false;
    } else return pos;
  }

  this.get = function(pos) {
    if (pos >= this.arr.length) {
      console.log("index out of range");
      return false;
    } else return this.arr[pos];
  }

  this.getMax = function() {
    return Math.max(...this.arr);
  }

  this.getMin = function() {
    return Math.min(...this.arr);
  }

  this.reverse = function() {
    return this.arr.reverse();
  }

  this.shift = function(pos, direction) {
    if (direction === "left") {
      const right = this.arr.slice(pos, this.arr.length);
      this.arr.splice(0, pos, right);
    } 
    if (direction === "right") {
      const left = this.arr.slice(0, pos);
      this.arr.splice(pos, this.arr.length, left);
    }
  }
}

// test code
let arr = new MyArray();
arr.add(1);
arr.add(2);
arr.add(3);
console.log("after add 1,2 and 3: ");
arr.print();
arr.insert(1,2);
console.log("insert 1 at the second position:");
arr.print();
arr.remove(0);
console.log("remove this first element:");
arr.print();
console.log("find element 2:");
console.log(arr.search(2));
console.log("get the second element:");
console.log(arr.get(1));
console.log("get the maximum element of the array:");
console.log(arr.getMax());
console.log("get the minimum element of the array:");
console.log(arr.getMin());
arr.reverse();
console.log("reverse the array:");
arr.print();
console.log("array shift 1 element toward right:");
arr.shift(1,"right");
arr.print();
