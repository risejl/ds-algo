// implement adjacencylist-based graph using ES6 class syntax
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}


class Adjacencylist {
	constructor(head = null) {
		this.head = head;
	}

	addEdge(value, next = null) {
		const node = new Node(value);
		if (this.head === null) this.head = node;
		else {
			this.head.next = node;
			this.head = node;
		}
	}
}

class Graph {
	constructor(source = null) {
		this.source = source;
	}
}

// test code
let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2;
let list1 = new Adjacencylist(node1);
let node3 = new Node(3);
let list2 = new Adjacencylist(node3);
list2.addEdge(list1);
let graph = new Graph(list1);
console.log(graph);