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

class AdjacencyMatrix {
	constructor(vertices_len, isDirected = false) {
		this.isDirected = isDirected;
		this.graph = [];
		for (let i = 0; i < vertices_len; i += 1) {
			let outer = [];
			for (let j = 0; j < vertices_len; j += 1) {
				outer.push(null);
			}
			this.graph.push(outer)
		}
	}

	addEdge(start, end, weight = 0) {
		if (this.isDirected === true) this.graph[start][end] = weight;
		else if (this.isDirected === false) {
			this.graph[start][end] = weight;
			this.graph[end][start] = weight;
		}
	}
}

class MyGraph {
	constructor(impType, vertices) {
		if (impType === 'linkedlist') {
			this.vertices = [];
			vertices.map((item) => {
				const node = new Node(item, 0);
				const adjList = new Adjacencylist(node);
				this.vertices.push(adjList);
			});
		} else if (impType === 'matrix') this.graph = new AdjacencyMatrix(vertices.length, true);
	}

	// breadth first search
	breadthFirstSearch(vertex) {
		let visited = [];
		let queue = new MyQueue();
		queue.enqueue(vertex);
		let p = queue.queue[0];
		while (queue.queue.length !== 0) {
			while (p.next !== null) {
				let isQueueHave = false;
				let isVisitedHave = false;
				for (let i = 0; i < queue.queue.length; i += 1) {
					if (queue.queue[i].vertex === p.next.vertex) isQueueHave = true;
				}
				for (let i = 0; i < visited.length; i += 1) {
					if (visited[i].vertex === p.next.vertex) isVisitedHave = true;
				}
				if (!isVisitedHave && !isQueueHave) {
					queue.enqueue(p.next);
					p = p.next;
				} else p = p.next;
			}
			let isVisitedHave = false;
			for (let i = 0; i < visited.length; i += 1) {
				if (visited[i].vertex === queue.queue[0].vertex) isVisitedHave = true;
			}
			if (!isVisitedHave)	{
				visited.push(queue.dequeue());
				if (queue.queue.length !== 0) p = graph.vertices[queue.queue[0].vertex].head;
			}
		}
		visited.map((item) => console.log(item.vertex));
	}
}

// test code
const vertices = [0,1,2,3,4,5,6,7,8,9,10];
let graph = new MyGraph('linkedlist', vertices);
graph.vertices[1].addEdge(4);
graph.vertices[1].addEdge(2);
graph.vertices[2].addEdge(1);
graph.vertices[2].addEdge(3);
graph.vertices[2].addEdge(5);
graph.vertices[2].addEdge(7);
graph.vertices[2].addEdge(8);
graph.vertices[3].addEdge(2);
graph.vertices[3].addEdge(4);
graph.vertices[3].addEdge(9);
graph.vertices[3].addEdge(10);
graph.vertices[4].addEdge(1);
graph.vertices[4].addEdge(3);
graph.vertices[5].addEdge(2);
graph.vertices[5].addEdge(6);
graph.vertices[5].addEdge(8);
graph.vertices[5].addEdge(7);
graph.vertices[6].addEdge(5);
graph.vertices[6].addEdge(5);
graph.vertices[7].addEdge(5);
graph.vertices[7].addEdge(2);
graph.vertices[7].addEdge(8);
graph.vertices[8].addEdge(2);
graph.vertices[8].addEdge(5);
graph.vertices[8].addEdge(7);
graph.vertices[9].addEdge(3);
graph.vertices[10].addEdge(3);
graph.depthFirstSearch(graph.vertices[1].head);