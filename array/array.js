// implement array by ES6 class syntax
/*
class MyArray {
  constructor() {
    this.list = [];
  }

  // is array empty
  isEmpty() {
    if (this.list.length === 0) return true;
    else return false;
  }

  // print all elements 
  print() {
    this.list.map((item) => {
      console.log(item);
    });
  }

  // add an element to the end
  add(value) {
    return this.list.push(value);
  }

  // insert an element of a given position
  insert(value, pos) {
    const rear = this.list.slice(pos, this.list.length);
    const front = this.list.slice(0, pos);
    this.list = [...front, value, ...rear];
  }

  // remove an element of a given position 
  remove(pos) {
    return this.list.splice(pos, 1);
  }

  // check whether an element is in the array
  search(value) {
    const pos = this.list.indexOf(value);
    if (pos === -1) {
      console.log('this element is not in the array');
      return false;
    } else return pos;
  }

  // return an element of a given position
  get(pos) {
    if (pos >= this.list.length) {
      console.log('index out of range');
      return false;
    } else return this.list[pos];
  }

  // return the maximum element of array
  getMax() {
    return Math.max(...this.list);
  }

  // return the minimum element of array
  getMin() {
    return Math.min(...this.list);
  }

  // reverse all array elements
  reverse() {
    return this.list.reverse();
  }

  // mov

  // move array elements together by left or right
  rotate(pos, direction) {
    if (direction === 'left') {
      const right = this.list.slice(pos, this.list.length);
      return this.list.splice(0, pos, right);
    }
    
    if (direction === 'right') {
      const left = this.list.slice(0, pos);
      return this.list.splice(pos, this.list.length, left);
    }
  }
}
*/

// implement array by vanilla js 
const MyArray = function () {
  this.arr = [];

  this.isEmpty = function () {
    if (this.arr.length === 0) return true;
    else return false;
  } 

  this.print = function () {
    this.arr.map((item) => {
      console.log(item);
    });
  }

  this.add = function (value) {
    return this.arr.push(value);
  }

  this.insert = function (value, pos) {
    const rear = this.arr.slice(pos,this.arr.length);
    const front = this.arr.slice(0, pos);
    this.arr = [...front, value, ...rear];
  }

  this.remove = function (pos) {
    return this.arr.splice(pos, 1);
  }

  this.search = function (value) {
    const pos = this.arr.indexOf(value);
    if (pos === -1) {
      console.log('this element is not in the array');
      return false;
    } else return pos;
  }

  this.get = function (pos) {
    if (pos >= this.arr.length) {
      console.log('index out of range');
      return false;
    } else return this.arr[pos];
  }

  this.getMax = function () {
    return Math.max(...this.arr);
  }

  this.getMin = function () {
    return Math.min(...this.arr);
  }

  this.reverse = function () {
    return this.arr.reverse();
  }

  this.shift = function (step, direction) {
    if (direction === 'left') {
      const right = this.arr.slice(this.arr.length - step - 1, this.arr.length);
      this.arr.splice(0, step, right);
      for (let i = 0; i < step; i += 1) {
        this.arr.push(0);
      }
    }

    if (direction === 'right') {
      const left = this.arr.slice(0, this.length - step - 1);
      this.arr.splice(0, this.length, left);
      for (let i = 0; i < step; i += 1) {
        this.arr.unshift(0);
      }
    }
  }

  this.rotate = function (pos, direction) {
    if (direction === 'left') {
      const right = this.arr.slice(pos, this.arr.length);
      this.arr.splice(0, pos, right);
    } 

    if (direction === 'right') {
      const left = this.arr.slice(0, pos);
      this.arr.splice(pos, this.arr.length, left);
    }
  }
}

let array = new MyArray();
array.add(1)
array.add(2)
array.add(3)
array.add(4)
array.add(5)
array.shift(2, 'right');
array.print();
