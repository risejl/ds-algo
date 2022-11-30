/*
// implement linkedlist-based tree using ES6 class syntax
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
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

  inorderTraversal(root = this.root) {
    if (root === null) return;
    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  postorderTraversal(root = this.root) {
    if (root === null) return;
    this.postorderTraversal(root.left);
    this.postorderTraversal(root.right);
    console.log(root.value);
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
const Node = function (value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;

}

const MyTree = function (root = null) {
  this.root = root;

  this.preorderTraversal = function (root = this.root) {
    if (root === null) return;
    console.log(root.value);
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
  }

  this.inorderTraversal = function (root = this.root) {
    if (root === null) return;
    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  this.postorderTraversal = function (root = this.root) {
    if (root === null) return;
    this.postorderTraversal(root.left);
    this.postorderTraversal(root.right);
    console.log(root.value);
  }

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
let root = new Node(1);
let leftChild = new Node(2);
let rightChild = new Node(3);
root.left = leftChild;
root.right = rightChild;
let tree = new MyTree(root);
console.log('this tree is now looks like:');
console.log(tree);
console.log('preorder traversal:');
tree.preorderTraversal();
console.log('inorder traversal:');
tree.inorderTraversal();
console.log('postorder traversal:');
tree.postorderTraversal();
console.log('levelorder traversal:');
tree.levelorderTraversal();