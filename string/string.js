// implement string using ES6 class syntax
class MyString {
  constructor() {
    this.string = '';
  }

  // is string empty
  isEmpty() {
    if (this.string === '') return true;
    else return false;
  }

  // add a character to a string
  add(ch) {
    return this.string += ch;
  } 

  // print string
  print() {
    console.log(this.string);
  }

  // convert string to lower case
  lower() {
    if (this.isEmpty()) return "";
    else return this.string.toLowerCase();
  }

  // convert string to upper case
  upper() {
    if (this.isEmpty()) return "";
    else return this.string.toUpperCase();
  }

  // whether a character in a string
  hasCh(ch) {
    if (this.isEmpty()) return "";
    else {
      for (let i = 0; i < this.string.length; i += 1) {
        if (this.string[i] === ch) return i;
      }
      return -1;
    }
  }
}
