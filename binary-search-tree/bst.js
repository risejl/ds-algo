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

	// bst sort
	inorderTraversal(root = this.root) {
		if (root === null) return;
		this.inorderTraversal(root.left);
		console.log(root.value);
		this.inorderTraversal(root.right);
	}

	// searching a node of a given value
	search(target, root = this.root) {
		if (root === null) {
			console.log(false);
			return;
		}
		if (root.value === target) console.log(true);
		else if (root.value < target) this.search(target, root.right);
		else this.search(target, root.left);
	}

	// searching a node of a given value non-recursive version 
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

	// insert a node to a bst
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

	// delete a node from a bst
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