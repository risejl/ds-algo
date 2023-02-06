// implement linkedlist-based tree using ES6 class syntax
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.exitStackCount = 0;
  }
}

// stack for non-recursive version of traversal
class MyStack {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    if (this.stack.length === 0) return true;
    else return false;
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }
}

// queue for level-order traversal
class MyQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (!this.isEmpty()) return this.queue.shift();
  }

  isEmpty() {
    if (this.queue.length === 0) return true;
    else return false;
  }
}

class MyTree {
  constructor(root = null) {
    this.root = root;
  }

  // preorder traversal recursive version
  preorderTraversal(root = this.root) {
    if (root === null) return;
    console.log(root.value);
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
  }

  // preorder traversal non-recursive version
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

  // inorder traversal recursive version
  inorderTraversal(root = this.root) {
    if (root === null) return;
    this.inorderTraversal(root.left);
    console.log(root.value);
    this.inorderTraversal(root.right);
  }

  // inorder traversal non-recursive version
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

  // postorder traversal recursive version
  postorderTraversal(root = this.root) {
    if (root === null) return;
    this.postorderTraversal(root.left);
    this.postorderTraversal(root.right);
    console.log(root.value);
  }
  
  // postorder traversal non-recursive version
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

  // levelorder traversal
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

  // return the number of nodes
  count(root = this.root) {
    let leftNum = 0;
    let rightNum = 0;
    if (root !== null) {
      leftNum = this.count(root.left);
      rightNum = this.count(root.right);
      return leftNum + rightNum + 1;
    }
    return 0;
  }

  // return the summation of nodes
  sumValue(root = this.root) {
    let leftSum = 0;
    let rightSum = 0;
    if (root !== null) {
      leftSum += this.sumValue(root.left);
      rightSum += this.sumValue(root.right);
      return leftSum + rightSum + root.value;
    }
    return 0;
  }

  // return the height of tree
  height(root = this.root) {
    let leftHeight = 0;
    let rightHeight = 0;
    if (root !== null) {
      leftHeight = this.height(root.left);
      rightHeight = this.height(root.right);
      if (leftHeight > rightHeight) return leftHeight + 1;
      else return rightHeight + 1;
    }
    return 0;
  }

  // return the number of leaf nodes
  leafNum(root = this.root) {
    let leftLeaf = 0;
    let rightLeaf = 0;
    if (root !== null) {      
      leftLeaf = this.leafNum(root.left);
      rightLeaf = this.leafNum(root.right);
      if ((root.left === null) && (root.right === null)) {
        return leftLeaf + rightLeaf + 1;
      } else {
        return leftLeaf + rightLeaf;
      }
    }
    return 0;
  }

  // return the number of nodes which have children
  childrenNum(root = this.root) {
    let leftChildren = 0;
    let rightChildren = 0;
    if (root !== null) {
      leftChildren = this.childrenNum(root.left);
      rightChildren = this.childrenNum(root.right);
      if ((root.left !== null) || (root.right !== null)) {
        return leftChildren + rightChildren + 1;
      } else return leftChildren + rightChildren;
    }
    return 0;
  }

  // return the number of nodes which have two children
  twoChildrenNum(root = this.root) {
    let leftChildren = 0;
    let rightChildren = 0;
    if (root !== null) {
      leftChildren = this.twoChildrenNum(root.left);
      rightChildren = this.twoChildrenNum(root.right);
      if ((root.left !== null) && (root.right !== null)) {
        return leftChildren + rightChildren + 1;
      } else return leftChildren + rightChildren;
    }
    return 0;
  }

  // return the number of nodes which have one child
  oneChildNum(root = this.root) {
    let leftChild = 0;
    let rightChild = 0;
    if (root !== null) {
      leftChild = this.oneChildNum(root.left);
      rightChild = this.oneChildNum(root.right);
      if ((root.left !== null) && (root.right === null) || (root.right !== null) && (root.left === null)) {
        return leftChild + rightChild + 1;
      } else return leftChild + rightChild;
    }
    return 0;
  }
}