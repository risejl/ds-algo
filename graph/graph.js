// implement adjacencylist-based grapy
// stack for depth first search
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

// queue for breadth first search
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

class Node {
	constructor(vertex, weight = 0, next = null) {
		this.vertex = vertex;
		this.weight = weight;
		this.next = next;
	}
}

class Adjacencylist {
	constructor(head = null) {
		this.head = head;
	}

	addEdge(vertex, weight = 0, next = null) {
		const node = new Node(vertex, weight);
		if (this.head === null) this.head = node;
		else {
			let p = this.head;
			while (p.next !== null) {
				p = p.next;
			}
			p.next = node;
		}
	}
}

class MyGraph {
	constructor(vertices) {
		this.vertices = [];
		vertices.map((item) => {
			const node = new Node(item, 0);
			const adjList = new Adjacencylist(node);
			this.vertices.push(adjList);
		});
	}

	depthFirstSearch(source) {
		let p = source;
		let stack = new MyStack();
		let visited = [];
		while (visited.length !== this.vertices.length) {
			console.log(p.head.vertex);
			visited.push(p.head.vertex);
			if (p.head.next !== null) {
				stack.push(p);
				p = p.head.next;
			} else {
				p = stack.pop();
				while (p.head.next !== null) {
					if (visited.indexOf(p.head.next.vertex) === -1) {
						p = p.head.next;
						break;
					} else p = p.head.next;
				}
			}
		}
	}

	breadthFirstSearch(source) {

	}
}

// test code
const vertices = [1,2,3,4];
let graph = new MyGraph(vertices);
graph.vertices[0].addEdge(2);
graph.vertices[0].addEdge(4);
graph.vertices[1].addEdge(3);
graph.vertices[2].addEdge(1);
graph.vertices[3].addEdge(4);
graph.depthFirstSearch(graph.vertices[0]);