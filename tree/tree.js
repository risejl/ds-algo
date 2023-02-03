/*
// implement linkedlist-based tree using ES6 class syntax
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.exitStackCount = 0;
  }
}

class MyTree {
  constructor(root = null) {
    this.root = root;
  }

  preorderTraversal(root = this.root) {
    if (root === null) return;
    console.log(root.value);
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
  }

  preorderTraversalNR(root = this.root) {
    if (root === null) return;

    let stack = new MyStack();
    let p = root;
    stack.push(p);
    console.log(p.value); 
    while (!stack.isEmpty()) {
      if (p.left !== null) {
        stack.push(p.left);
        console.log(p.left.value);
        p = p.left;
      } else {
        p = stack.pop();
        if (p.right !== null) {
          stack.push(p.right);
          console.log(p.right.value);
          p = p.right;
        } else {
          if (stack.isEmpty()) break;
          else {
            p = stack.pop().right;
            if (p === null) break;
            else {
              stack.push(p);
              console.log(p.value);
            }
          }
        }
      }
    }
  }

  inorderTraversal(root = this.root) {
    if (root === null) return;
    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  inorderTraversalNR(root = this.root) {
    if (root === null) return;

    let p = root;
    let stack = new MyStack();
    stack.push(p);
    while (!stack.isEmpty()) {
      if (p.left !== null) {
        stack.push(p.left);
        p = p.left;
      } else {
        p = stack.pop();
        console.log(p.value);
        if (p.right !== null) {
          stack.push(p.right);
          p = p.right;
        } else {
          p = stack.pop();
          console.log(p.value);
          p = p.right;
          if (p.right === null) break;
          else stack.push(p);
        }
      }
    }
  }

  postorderTraversal(root = this.root) {
    if (root === null) return;
    this.postorderTraversal(root.left);
    this.postorderTraversal(root.right);
    console.log(root.value);
  }
  
  postorderTraversalNR(root = this.root) {
    if (root === null) return;

    let stack = new MyStack();
    let p = root;
    stack.push(p);
    while (!stack.isEmpty()) {
      if (p.left !== null) {
        stack.push(p.left);
        p = p.left;
      } else {
        p.exitStackCount += 1;
        if (p.exitStackCount === 1) {
          p = p.right;
          if (p === null) {
            p = stack.pop();
            p.exitStackCount += 1;
          } else stack.push(p);
        }
      }
      while (p.exitStackCount === 2) {
        console.log(p.value);
        if (!stack.isEmpty()) {
          p = stack.pop();
          p.exitStackCount += 1;
          if (p.exitStackCount === 2) continue;
          else {
            stack.push(p);
            p = p.right;
            if (p === null) {
              p = stack.pop();
              p.exitStackCount += 1;
            } else stack.push(p);
          }
        } else break;
      }
    }
  }

  levelorderTraversal(root = this.root) {
    if (root === null) return;
    let queue = new MyQueue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      console.log(node.value);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }
}
*/

// implement linkedlist-based tree using vanilla js
const TreeNode = function (value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.exitStackCount = 0;
}

// stack for non-recursive version of traversal
const MyStack = function () {
  this.stack = [];

  this.isEmpty = function () {
    if (this.stack.length === 0) return true;
    else return false;
  }

  this.push = function (element) {
    this.stack.push(element);
  }

  this.pop = function () {
    return this.stack.pop();
  }
}

// queue for level-order traversal
const MyQueue = function () {
  this.queue = [];

  this.enqueue = function (element) {
    this.queue.push(element);
  }

  this.dequeue = function () {
    if (!this.isEmpty()) return this.queue.shift();
  }

  this.isEmpty = function () {
    if (this.queue.length === 0) return true;
    else return false;
  }
}

const MyTree = function (root = null) {
  this.root = root;

  // preorder traversal recursive version
  this.preorderTraversal = function (root = this.root) {
    if (root === null) return;
    console.log(root.value);
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
  }

  // preorder traversal non-recursive version
  this.preorderTraversalNR = function (root = this.root) {
    if (root === null) return;

    let stack = new MyStack();
    let p = root;
    stack.push(p);
    console.log(p.value);
    while (!stack.isEmpty()) {
      if (p.left !== null) {
        stack.push(p.left);
        console.log(p.left.value);
        p = p.left;
      } else {
        p = stack.pop();
        if (p.right !== null) {
          stack.push(p.right);
          console.log(p.right.value);
          p = p.right;
        } else {
          if (!stack.isEmpty()) {
            p = stack.pop().right;
            if (p === null) break;
            else {
              stack.push(p);
              console.log(p.value);
            }
          } else break;
        }
      }
    }
  }

  // inorder traversal recursive version
  this.inorderTraversal = function (root = this.root) {
    if (root === null) return;
    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  // inorder traversal non-recursive version
  this.inorderTraversalNR = function (root = this.root) {
    if (root === null) return;

    let stack = new MyStack();
    let p = root;
    stack.push(p);
    while (!stack.isEmpty()) {
      if (p.left !== null) {
        stack.push(p.left);
        p = p.left;
      } else {
        p = stack.pop();
        console.log(p.value);
        if (p.right !== null) {
          stack.push(p.right);
          p = p.right;
        } else {
          p = stack.pop();
          console.log(p.value);
          p = p.right;
          if (p === null) break;
          stack.push(p);
        }
      }
    }
  }

  // postorder traversal recursive version
  this.postorderTraversal = function (root = this.root) {
    if (root === null) return;
    this.postorderTraversal(root.left);
    this.postorderTraversal(root.right);
    console.log(root.value);
  }

  // postorder traversal non-recursive version
  this.postorderTraversalNR = function (root = this.root) {
    if (root === null) return;

    let stack = new MyStack();
    let p = root;
    stack.push(p);
    while (!stack.isEmpty()) {
      if (p.left !== null) {
        stack.push(p.left);
        p = p.left;
      } else {
        p.exitStackCount += 1;
        if (p.exitStackCount === 1) {
          p = p.right;
          if (p === null) {
            p = stack.pop();
            p.exitStackCount += 1;
          } else stack.push(p);
        }
      }
      while (p.exitStackCount === 2) {
        console.log(p.value);
        if (!stack.isEmpty()) {
          p = stack.pop();
          p.exitStackCount += 1;
          if (p.exitStackCount === 2) continue;
          else {
            stack.push(p);
            p = p.right;
            if (p === null) {
              p = stack.pop();
              p.exitStackCount += 1;
            } else stack.push(p);
          }
        } else break;
      }
    }
  }


  // levelorder traversal
  this.levelorderTraversal = function (root = this.root) {
    if (root === null) return;
    let queue = new MyQueue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      console.log(node.value);
      if (node.left !== null) queue.enqueue(node.left);
      if (node.right !== null) queue.enqueue(node.right);
    }
  }
}


// test code
let root = new TreeNode(1);
let leftChild = new TreeNode(2);
let rightChild = new TreeNode(3);
let leftleftChild = new TreeNode(4);
let leftrightChild = new TreeNode(5);
let rightleftChild = new TreeNode(6);
let rightleftrightChild = new TreeNode(7);
root.left = leftChild;
root.right = rightChild;
leftChild.left = leftleftChild;
leftChild.right = leftrightChild;
rightChild.left = rightleftChild;
rightleftChild.right = rightleftrightChild;
let tree = new MyTree(root);