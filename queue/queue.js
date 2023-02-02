// implement array-based queue using ES6 class syntax

class MyQueue {
	constructor() {
		this.queue = [];
		this.front = -1;
		this.rear = -1;
	}

	isEmpty() {
		if (this.front === this.rear) return true;
		else return false;
	}

	enqueue(value) {
		this.rear += 1;
		this.queue.push(value);
	}

	dequeue() {
		if (this.isEmpty()) return false;
		else {
			const element = this.queue.shift();
			this.front += 1;
			return element;
		}
	}

	getRear() {
		if (this.isEmpty()) return false;
		else return this.queue[this.rear];
	}
	
	getFront() {
		if (this.isEmpty()) return false;
		else return this.queue[this.front];
	}

	print() {
		if (!this.isEmpty()) {
			this.queue.map((item) => console.log(item));
		}
	}
}


// implement array-based queue using vanilla js
/*
const MyQueue = function () {
	this.queue = [];
	this.front = -1;
	this.rear = -1;

	this.isEmpty = function () {
		if (this.front === this.rear) return true;
		else return false;
	}

	this.enqueue = function (value) {
		this.rear += 1;
		this.queue.push(value);
	}

	this.dequeue = function () {
		if (this.isEmpty()) return false;
		else {
			const element = this.queue.shift();
			this.front += 1;
			return element;
		}
	}

	this.getRear = function () {
		if (this.isEmpty()) return false;
		else return this.queue[this.rear];
	}
	
	this.getFront = function () {
		if (this.isEmpty()) return false;
		else return this.queue[this.front];
	}

	this.print = function () {
		if (!this.isEmpty()) {
			this.queue.map((item) => console.log(item));
		}
	}
}

// test code
let queue = new MyQueue();
console.log('element 1 and 2 enqueue:');
queue.enqueue(1);
queue.enqueue(2);
queue.print();
console.log('is queue empty?');
console.log(queue.isEmpty());
console.log('get the rear element of queue:');
console.log(queue.getRear());
console.log('front element dequeue:');
console.log(queue.dequeue());
console.log('get the front element:');
console.log(queue.getFront());
*/


// implement linkedlist-based queue using ES6 class syntax
/*
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
*/


// implement linkedlist-based queue using vanilla js
/*
const Node = function (value, next = null) {
	this.value = value;
	this.next = next;
}

const MyQueue = function () {
	this.front = null;
	this.rear = null;

	this.isEmpty = function () {
		if (this.front === null) return true;
		else return false;
	}

	this.enqueue = function (value, next = null) {
		const node = new Node(value, next);
		if (this.rear === null) {
			this.rear = node;
			this.front = node;
		} else {
			this.rear.next = node;
			this.rear = node;
		}
	}

	this.dequeue = function () {
		if (this.isEmpty()) return false;
		else {
			const node = this.front;
			this.front = this.front.next;
			return node;
		}
	}

	this.getRear = function () {
		if (this.isEmpty()) return false;
		else return this.rear;
	}

	this.getFront = function () {
		if (this.isEmpty()) return false;
		else return this.front;
	}	

	this.print = function () {
		let p = this.front;
		while (p !== null) {
			console.log(p);
			p = p.next;
		}
	}
}
*/

// test code
let queue = new MyQueue();
console.log('element 1 and 2 enqueue:');
queue.enqueue(1);
queue.enqueue(2);
queue.print();
console.log('is queue empty?');
console.log(queue.isEmpty());
console.log('get the rear element of queue:');
console.log(queue.getRear());
console.log('front element dequeue:');
console.log(queue.dequeue());
console.log('get the front element:');
console.log(queue.getFront());
