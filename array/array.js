// implement array by ES6 class syntax
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

  // shift elements to left or right
  shift(step, direction) {
    if (direction === 'left') {
      const right = this.arr.slice(step, this.arr.length);
      this.arr.splice(0, this.arr.length, ...right);
      for (let i = 0; i < step; i += 1) {
        this.arr.push(0);
      }
    }

    if (direction === 'right') {
      const left = this.arr.slice(0, this.arr.length - step);
      this.arr.splice(0, this.arr.length, ...left);
      for (let i = 0; i < step; i += 1) {
        this.arr.unshift(0);
      }
    }
  }
  
  // rotate elements to left or right
  rotate(step, direction) {
    if (direction === 'left') {
      for (let i = 0; i < step; i += 1) {
        this.arr.push(this.arr.shift());
      }
    } 

    if (direction === 'right') {
      for (let i = 0; i < step; i += 1) {
        this.arr.unshift(this.arr.pop());
      }
    }
  }
}