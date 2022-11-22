// implement bag data structure using ES6 class syntax
/**
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
 **/

// using vanilla js
function MyBag() {
  this.list = [];
  this.isEmpty = function() {
    if (this.list.length === 0) return true;
    else return false;
  }
  this.size = function() {
    return this.list.length;
  }
  this.add = function(value) {
    this.list.push(value);
  }
  this.print = function() {
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

