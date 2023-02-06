// implement linkedlist by ES6 class syntax
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor(head = null) {
    this.head = null;
  }

  // create a linkedlist by array elements
  createListByArray(array) {
    if (array.length === 0) return this.head;

    const headNode = new Node(array[0]);
    this.head = headNode;
    let p = this.head;
    for (let i = 1; i < array.length; i += 1) {
      const node = new Node(array[i]);
      p.next = node;
      p = p.next;
    }
    return this.head;
  }

  // insert a node to the head of linkedlist
  createNodeByHead(value, next = null) {
    const node = new Node(value, next);
    node.next = this.head;
    this.head = node;
  }

  // insert a node to the end of linkedlist
  createNodeByTail(value, next = null) {
    const node = new Node(value, next);
    let p = this.head;
    while (p.next !== null) {
      p = p.next;
    }
    p.next = node;
  }

  // print all nodes
  print() {
    let p = this.head;
    while (p !== null) {
      console.log(p);
      p = p.next;
    }
  }

  // print recursively
  printR(p = this.head) {
    if (p !== null) {
      console.log(p);
      this.printR(p.next);
    }
  }

  // reverse print reversively
  printRR(p = this.head) {
    if (p !== null) {
      this.printRR(p.next);
      console.log(p);
    }
  }
  
  // return the number of nodes
  count() {
    let p = this.head;
    let counter = 0;
    while (p !== null) {
      counter += 1;
      p = p.next;
    }
    return counter;
  }
  
  // return the summation of all nodes
  add() {
    let p = this.head;
    let sum = 0;
    while (p !== null) {
      sum += p.value;
      p = p.next;
    }
    return sum;
  }

  // return the maximum value of nodes
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

  // return the minimum value of nodes
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

  // check whether a node is in the linkedlist
  search(value) {
    let p = this.head;
    let index = 0;
    while (p !== null) {
      if (p.value !== value) {
        p = p.next;
        index += 1;
      } else return index;
    }
  }

  // delete a node at a given index
  deleteNode(index) {
    let p = this.head;
    let counter = 0;
    while (p !== null) {
      if (counter < index-1) {
        p = p.next;
        counter += 1;
      }
      if (counter === index-1) {
        p.next = p.next.next;
        return;
      }
    }
  }

  // remove duplicate nodes
  removeDuplicate() {
    let pre = this.head;
    let p = pre.next;
    while (p !== null) {
      if (p.value === pre.value) {
        p = p.next;
        pre.next = p;
      } else {
        p = p.next;
        pre = pre.next;
      }
    }
  }

  // is linkedlist have a loop
  isLoop() {
    if (this.head === null) return false;
    if (this.head.next === this.head) return true;
    if (this.head.next === null) return false;
    let fast = this.head;
    let slow = this.head;
    while (true) {
        if ((fast === null) || (fast.next === null)) return false;
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }
  }

  // reverse a linkedlist
  reverse() {
    let q = this.head;
    let p = q.next;
    let r = p.next;
    while (r.next !== null) {
      if (q === this.head) q.next = null;
      p.next = q;
      q = p;
      p = r;
      r = r.next;
    }
    r.next = p;
    p.next = q;
    this.head = r;
  }

  // reverse a linkedlist recursively
  reverseR(p = null, q = null) {
    if (p !== null) {
      this.reverseR(p.next, q.next);
      p.next = q;
    } else {
      this.head = q;
    }
    q.next = null;
  }
}