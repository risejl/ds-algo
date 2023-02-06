// implement array-based queue using ES6 class syntax
class MyQueue {
	constructor() {
		this.queue = [];
		this.front = -1;
		this.rear = -1;
	}

	// whether a queue is empty
	isEmpty() {
		if (this.front === this.rear) return true;
		else return false;
	}

	// an element enter to the rear of queue
	enqueue(value) {
		this.rear += 1;
		this.queue.push(value);
	}

	// an element remove from the front of queue
	dequeue() {
		if (this.isEmpty()) return false;
		else {
			const element = this.queue.shift();
			this.front += 1;
			return element;
		}
	}

	// get the element from the rear of queue
	getRear() {
		if (this.isEmpty()) return false;
		else return this.queue[this.rear];
	}
	
	// get the element from the front of queue
	getFront() {
		if (this.isEmpty()) return false;
		else return this.queue[this.front];
	}

	// print all elements
	print() {
		if (!this.isEmpty()) {
			this.queue.map((item) => console.log(item));
		}
	}
}


// implement linkedlist-based queue using ES6 class syntax
class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class MyQueue {
	constructor() {
		this.front = null;
		this.rear = null;
	}

	isEmpty() {
		if (this.front === null) return true;
		else return false;
	}

	enqueue(value, next = null) {
		const node = new Node(value, next);
		if (this.rear === null) {
			this.rear = node;
			this.front = node;
		} else {
			this.rear.next = node;
			this.rear = node;
		}
	}

	dequeue() {
		if (this.isEmpty()) return false;
		else {
			const node = this.front;
			this.front = this.front.next;
			return node;
		}
	}

	getRear() {
		if (this.isEmpty()) return false;
		else return this.rear;
	}

	getFront() {
		if (this.isEmpty()) return false;
		else return this.front;
	}	

	print() {
		let p = this.front;
		while (p !== null) {
			console.log(p);
			p = p.next;
		}
	}
}


