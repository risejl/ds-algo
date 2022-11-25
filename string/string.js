// implement string using ES6 class syntax
/*
class MyString {
  constructor() {
    this.string = '';
  }

  isEmpty() {
    if (this.string === '') return true;
    else return false;
  }

  add(ch) {
    return this.string += ch;
  } 

  print() {
    console.log(this.string);
  }

  lower() {
    if (this.isEmpty()) return false;
    else return this.string.toLowerCase();
  }

  upper() {
    if (this.isEmpty()) return false;
    else return this.string.toUpperCase();
  }

  hasCh(ch) {
    if (this.isEmpty()) return false;
    else {
      for (let i = 0; i < this.string.length; i += 1) {
        if (this.string[i] === ch) return i;
      }
      return -1;
    }
  }
}
*/

// implement string using vanilla js
const MyString = function () {
  this.string = '';

  this.isEmpty = function () {
    if (this.string === '') return true;
    else return false;
  }

  this.add = function (ch) {
    return this.string += ch;
  } 

  this.print = function () {
    console.log(this.string);
  }

  this.lower = function () {
    if (this.isEmpty()) return false;
    else return this.string.toLowerCase();
  }

  this.upper = function () {
    if (this.isEmpty()) return false;
    else return this.string.toUpperCase();
  }

  this.hasCh = function (ch) {
    if (this.isEmpty()) return false;
    else {
      for (let i = 0; i < this.string.length; i += 1) {
      if (this.string[i] === ch) return i;
      }
      return -1;
    }
  }
}

// test code
let string = new MyString();
string.add('a');
string.add('b');
console.log('add character a and b to empty string:');
string.print();
console.log('is string empty?');
console.log(string.isEmpty());
console.log('convert all character to uppercase:');
console.log(string.upper());
console.log('convert all character to lowercase:');
console.log(string.lower());
console.log('is a in string?');
console.log(string.hasCh('a'));