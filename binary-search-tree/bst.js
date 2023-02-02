// using ES6 class syntax 
/*
class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class MyBinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	inorderTraversal(root = this.root) {
		if (root === null) return;
		this.inorderTraversal(root.left);
		console.log(root.value);
		this.inorderTraversal(root.right);
	}

	search(target, root = this.root) {
		if (root === null) return;
		if (root.value === target) console.log(root.value);
		else if (root.value < target) this.search(target, root.right);
		else this.search(target, root.left);
	}

	insert(value) {
		if (this.root == null) {
			const node = new Node(value);
			this.root = node;
		}
		let p = this.root;
		while (p.left !== null || p.right !== null) {
			if (p.value <= value) p = p.right;
			else p = p.left;
		}
		const node = new Node(value);
		if (value >= p.value) p.right = node;
		else p.left = node;
	}

	delete(value) {
		if (this.root === null) return false;
		let p = this.root;
		let prev = this.root;
		while (p !== null) {
			if (p.value > value) {
				prev = p;
				p = p.left
			} else if (p.value < value) {
				prev = p;
				p = p.right;
			} else break;
		}
		if (p === null) return false;
		if (p.left === null && p.right === null) {
			if (prev.left === p) prev.left = null;
			else if (prev.right === p) prev.right = null;
			return true;
		}
		if (p.left !== null || p.right !== null) {
			if (p.left !== null) {
				if (prev.left === p) prev.left = p.left;
				else if (prev.right === p) prev.right = p.left;
			} else if (p.right !== null) {
				if (prev.left === p) prev.left = p.right;
				else if (prev.right === p) prev.right = p.right;
			}
			return true;
		}
	}
}
*/

// using vanilla js 
const Node = function (value, left = null, right = null) {
	this.value = value;
	this.left = left;
	this.right = right;

}

const MyBinarySearchTree = function (root = null) {
	this.root = root;

	this.inorderTraversal = function (root = this.root) {
		if (root === null) return;
		this.inorderTraversal(root.left);
		console.log(root.value);
		this.inorderTraversal(root.right);
	}

	this.search = function (target, root = this.root) {
		if (root === null) return;
		if (root.value === target) console.log(root.value);
		else if (root.value < target) this.search(target, root.right);
		else this.search(target, root.left);
	}

	this.insert = function (value) {
		if (this.root === null) {
			const node = new Node(value);
			this.root = node;
		}
		let p = this.root;
		while (p.left !== null || p.right !== null) {
			if (p.value <= value) p = p.right;
			else p = p.left;
		}
		const node = new Node(value);
		if (value >= p.value) p.right = node;
		else p.left = node;
	}

	this.delete = function (value) {
		if (this.root === null) return false;
		let p = this.root;
		let prev = this.root;
		while (p !== null) {
			if (p.value > value) {
				prev = p;
				p = p.left
			} else if (p.value < value) {
				prev = p;
				p = p.right;
			} else break;
		}
		if (p === null) return false;
		if (p.left === null && p.right === null) {
			if (prev.left === p) prev.left = null;
			else if (prev.right === p) prev.right = null;
			return true;
		}
		if (p.left !== null || p.right !== null) {
			if (p.left !== null) {
				if (prev.left === p) prev.left = p.left;
				else if (prev.right === p) prev.right = p.left;
			} else if (p.right !== null) {
				if (prev.left === p) prev.left = p.right;
				else if (prev.right === p) prev.right = p.right;
			}
			return true;
		}
	}
}


// test code
let node = new Node(2);
let left = new Node(1);
let right = new Node(3);
node.left = left;
node.right = right;
let bst = new MyBinarySearchTree(node);
console.log('binary search tree looks like:');
console.log(bst);
console.log('binary search tree inorder traversal, which is also a sort array:');
bst.inorderTraversal();
console.log('search node of value 1:');
bst.search(1);
console.log('add node value of 4:');
bst.insert(4);
console.log(bst);
//console.log('delete node of value 4:');
//console.log(bst.delete(4));
//console.log(bst);
console.log('delete node of value 3:');
console.log(bst.delete(3));
console.log(bst);
