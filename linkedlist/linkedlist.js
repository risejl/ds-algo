// implement linkedlist using ES6 class syntax
/*
class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor(head = null) {
    this.head = null;
  }

  createNodeByHead(value, next=null) {
    let node = new Node(value, next);
    node.next = this.head;
    this.head = node;
  }

  createNodeByTail(value, next=null) {
    let node = new Node(value, next);
    let p = this.head;
    while (p.next !== null) {
      p = p.next;
    }
    p.next = node;
  }

  print() {
    let p = this.head;
    while (p !== null) {
      console.log(p);
      p = p.next;
    }
  }
  
  count() {
    let p = this.head;
    let counter = 0;
    while (p !== null) {
      counter++;
      p = p.next;
    }
    return counter;
  }
  
  add() {
    let p = this.head;
    let sum = 0;
    while (p !== null) {
      sum += p.value;
      p = p.next;
    }
    return sum;
  }

  getMax() {
    let p = this.head;
    let max = p.value;
    while (p !== null) {
      if (max < p.value) {
        max = p.value;
      }
      p = p.next;
    }
    return max;
  }

  getMin() {
    let p = this.head;
    let min = p.value;
    while (p !== null) {
      if (min > p.value) {
        min = p.value;
      }
      p = p.next;
    }
    return min;
  }

  search(value) {
    let p = this.head;
    let index = 0;
    while (p !== null) {
      if (p.value !== value) {
        p = p.next;
        index++;
      } else return index;
    }
  }

  deleteNode(index) {
    let p = this.head;
    let counter = 0;
    while (p !== null) {
      if (counter < index-1) {
        p = p.next;
        counter++;
      }
      if (counter === index-1) {
        p.next = p.next.next;
        return;
      }
    }
  }
}
*/

// implement linkedlist using vanilla js
function Node(value, next=null) {
  this.value = value;
  this.next = next;
}

function MyLinkedList(head=null) {
  this.head = null;

  this.createNodeByHead = function(value, next=null) {
    let node = new Node(value, next);
    node.next = this.head;
    this.head = node;
  }

  this.createNodeByTail = function(value, next=null) {
    let node = new Node(value, next);
    let p = this.head;
    while (p.next !== null) {
      p = p.next;
    }
    p.next = node;
  }

  this.print = function() {
    let p = this.head;
    while (p !== null) {
      console.log(p);
      p = p.next;
    }
  }
  
  this.count = function() {
    let p = this.head;
    let counter = 0;
    while (p !== null) {
      counter++;
      p = p.next;
    }
    return counter;
  }
  
  this.add = function() {
    let p = this.head;
    let sum = 0;
    while (p !== null) {
      sum += p.value;
      p = p.next;
    }
    return sum;
  }

  this.getMax = function() {
    let p = this.head;
    let max = p.value;
    while (p !== null) {
      if (max < p.value) {
        max = p.value;
      }
      p = p.next;
    }
    return max;
  }

  this.getMin = function() {
    let p = this.head;
    let min = p.value;
    while (p !== null) {
      if (min > p.value) {
        min = p.value;
      }
      p = p.next;
    }
    return min;
  }

  this.search = function(value) {
    let p = this.head;
    let index = 0;
    while (p !== null) {
      if (p.value !== value) {
        p = p.next;
        index++;
      } else return index;
    }
  }

  this.deleteNode = function(index) {
    let p = this.head;
    let counter = 0;
    while (p !== null) {
      if (counter < index-1) {
        p = p.next;
        counter++;
      }
      if (counter === index-1) {
        p.next = p.next.next;
        return;
      }
    }
  } 
}


// test code
let linkedList = new MyLinkedList();
linkedList.createNodeByHead(1);
linkedList.createNodeByTail(2);
console.log("after add 1 and 2, the linkedlist:");
linkedList.print();
console.log("how many elements are there:");
console.log(linkedList.count());
console.log("total element value:");
console.log(linkedList.add());
console.log("maximum element:");
console.log(linkedList.getMax());
console.log("minimum element:");
console.log(linkedList.getMin());
console.log("the 2 element's index:");
console.log(linkedList.search(2));
console.log("delete the first element:");
linkedList.deleteNode(1);
console.log(linkedList);
linkedList.print();
