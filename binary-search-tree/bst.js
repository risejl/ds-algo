/*
// using ES6 class syntax 
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
		if (root === null) {
			console.log(false);
			return;
		}
		if (root.value === target) console.log(true);
		else if (root.value < target) this.search(target, root.right);
		else this.search(target, root.left);
	}

	searchNR(target, root = this.root) {
		while (root !== null) {
			if (target === root.value) {
				console.log(true);
				return;
			} else if (target > root.value) {
				root = root.right;
			} else {
				root = root.left;
			}
		}
		console.log(false);
		return;
	}

	insert(value) {
		const node = new Node(value);
		if (this.root === null) {
			this.root = node;
			return;
		}

		p = this.root;
		while ((p.left !== null ) || (p.right !== null)) {
			if ((p.left === null) && (value < p.value)) {
				p.left = node;
				break;
			} else if ((p.right === null) && (value >= p.value)) {
				p.right = node;
				break;
			} else if (value >= p.value) p = p.right;
			  else if (value < p.value) p = p.left;
		}
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

	// bst sort
	this.inorderTraversal = function (root = this.root) {
		if (root === null) return;
		this.inorderTraversal(root.left);
		console.log(root.value);
		this.inorderTraversal(root.right);
	}

	// search a node of a give value
	this.search = function (target, root = this.root) {
		if (root === null) {
			console.log(false);
			return;
		}
		if (root.value === target) console.log(true);
		else if (root.value < target) this.search(target, root.right);
		else this.search(target, root.left);
	}

	// non-recursive version of search
	this.searchNR = function (target, root = this.root) {
		while (root !== null) {
			if (target === root.value) {
				console.log(true);
				return;
			} else if (target > root.value) {
				root = root.right;
			} else {
				root = root.left;
			}
		}
		console.log(false);
		return;
	}

	// insert a node to bst
	this.insert = function (value) {
		const node = new Node(value);
		if (this.root === null) {
			this.root = node;
			return;
		}

		p = this.root;
		while ((p.left !== null ) || (p.right !== null)) {
			if ((p.left === null) && (value < p.value)) {
				p.left = node;
				break;
			} else if ((p.right === null) && (value >= p.value)) {
				p.right = node;
				break;
			} else if (value >= p.value) p = p.right;
			  else if (value < p.value) p = p.left;
		}
		if (value >= p.value) p.right = node;
		else p.left = node;
	}

	// delete a node from bst
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
		if (p.left !== null && p.right !== null) {
			let inorderSuccessor = p.right;
			let iSP = p.right;
			let t = p.right;
			while (t !== null) {
				if (t.left !== null) {
					iSP = inorderSuccessor;
					t = t.left;
					inorderSuccessor = t;
				} else (t.left === null) break;
			}
			if (inorderSuccessor.left === null && inorderSuccessor.right === null) {
				p.value = inorderSuccessor.value;
				iSP.left = null;
			} else if (inorderSuccessor.right !== null) {

			}
		}
	}
}


// test code
let bst = new MyBinarySearchTree();
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(4);
console.log('binary search tree looks like:');
console.log(bst);