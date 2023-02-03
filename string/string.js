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

  // is string empty
  this.isEmpty = function () {
    if (this.string === '') return true;
    else return false;
  }

  // add a character to a string
  this.add = function (ch) {
    return this.string += ch;
  } 

  // print string
  this.print = function () {
    console.log(this.string);
  }

  // convert string to lower case
  this.lower = function () {
    if (this.isEmpty()) return false;
    else return this.string.toLowerCase();
  }

  // convert string to upper case
  this.upper = function () {
    if (this.isEmpty()) return false;
    else return this.string.toUpperCase();
  }

  // whether a character in a string
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