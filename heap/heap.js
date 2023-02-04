// implement heap using ES6 class syntax
class MyHeap {
	constructor() {
		this.heap = [];
	}
	
	// insert a node to heap
	insert(value) {
		this.heap.push(value);
		let index = this.heap.length - 1;
		let parentIndex = 0;
		if (index % 2 === 0) parentIndex = (index - 1) / 2;
		else parentIndex = index / 2;
		while (this.heap[index] > this.heap[Math.floor(parentIndex)]) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[Math.floor(parentIndex)];
			this.heap[Math.floor(parentIndex)] = temp;
			index = Math.floor(parentIndex);
			if (index % 2 === 0) parentIndex = (index - 1) / 2;
			else parentIndex = index / 2;
		}
	}

	// delete the root node from a heap
	deleteRoot() {
		const root = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap[this.heap.length - 1] = root;
		const value = this.heap.pop();
		let index = 0;
		if ((index + 2 < this.heap.length) && (this.heap[index + 1] > this.heap[index + 2])) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[index + 1];
			this.heap[index + 1] = temp;
			index = index + 1;
		} else if ((index + 2 < this.heap.length) && (this.heap[index + 1] < this.heap[index + 2])) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[index + 2];
			this.heap[index + 2] = temp;
			index = 2 + index;
		}
		while (((2 * index + 1) < this.heap.length) && (this.heap[index] < this.heap[index * 2]) && (this.heap[index] < this.heap[index * 2 + 1])) {
			if (this.heap[index * 2] > this.heap[index * 2 + 1]) {
				let temp = this.heap[index];
				this.heap[index] = this.heap[2 * index];
				this.heap[2 * index] = temp;
				index = 2 * index;
			} else if (this.heap[index * 2] < this.heap[index * 2 + 1]) {
				let temp = this.heap[index];
				this.heap[index] = this.heap[2 * index + 1];
				this.heap[2 * index + 1] = temp;
				index = 2 * index + 1;
			}
		}
		return value;
	}

	// build a heap
	build(arr) {
		for (let i = 0; i < arr.length; i += 1) {
			this.insert(arr[i]);
		}
	}

	// heap sort
	sort() {
		let sortedArr = [];
		for (let i = 0; i < this.heap.length; i += 1) {
			sortedArr.push(this.deleteRoot());
		}
		return sortedArr;
	}
}

// implement heap using vanilla js
/*
const Heap = function () {
	this.heap = [];
	
	this.insert = function (value) {
		this.heap.push(value);
		let index = this.heap.length - 1;
		let parentIndex = 0;
		if (index % 2 === 0) parentIndex = (index - 1) / 2;
		else parentIndex = index / 2;
		while (this.heap[index] > this.heap[Math.floor(parentIndex)]) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[Math.floor(parentIndex)];
			this.heap[Math.floor(parentIndex)] = temp;
			index = Math.floor(parentIndex);
			if (index % 2 === 0) parentIndex = (index - 1) / 2;
			else parentIndex = index / 2;
		}
	}

	this.deleteRoot = function () {
		const root = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap[this.heap.length - 1] = root;
		const value = this.heap.pop();
		let index = 0;
		if ((index + 2 < this.heap.length) && (this.heap[index + 1] > this.heap[index + 2])) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[index + 1];
			this.heap[index + 1] = temp;
			index += 1
		} else if ((index + 2 < this.heap.length) && (this.heap[index + 1] < this.heap[index + 2])) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[index + 2];
			this.heap[index + 2] = temp;
			index += 2
		}
		while ((2 * index + 1 < this.heap.length) && (this.heap[index] < this.heap[index * 2]) && (this.heap[index] < this.heap[index * 2 + 1])) {
			if (this.heap[index * 2] > this.heap[index * 2 + 1]) {
				let temp = this.heap[index];
				this.heap[index] = this.heap[2 * index];
				this.heap[2 * index] = temp;
				index = 2 * index;
			} else if (this.heap[index * 2] < this.heap[index * 2 + 1]) {
				let temp = this.heap[index];
				this.heap[index] = this.heap[2 * index + 1];
				this.heap[2 * index + 1] = temp;
				index = 2 * index + 1;
			}
		}
		return value;
	}

	this.build = function (arr) {
		for (let i = 0; i < arr.length; i += 1) {
			this.insert(arr[i]);
		}
	}

	this.sort = function () {
		let sortedArr = [];
		for (let i = 0; i < this.heap.length; i += 1) {
			sortedArr.push(this.deleteRoot());
		}
		return sortedArr;
	}
}
*/

// test code
let heap = new MyHeap();
const array = [0,10,20,30,25,5,40,35];
console.log('build heap:');
heap.build(array);
console.log(heap);
console.log(heap.sort());