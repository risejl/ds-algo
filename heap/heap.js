// implement heap using ES6 class syntax
class MyHeap {
	constructor() {
		this.heap = [];
	}
	
	insert(value) {
		this.heap.push(value);
		let index = this.heap.length - 1;
		while (this.heap[index] > this.heap[Math.floor(index / 2)]) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[Math.floor(index / 2)];
			this.heap[Math.floor(index / 2)] = temp;
			index = Math.floor(index / 2);
		}
	}

	deleteRoot() {
		const root = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap[this.heap.length - 1] = root;
		const value = this.heap.pop();
		let index = 0;
		


		return value;
	}

	build(arr) {
		for (let i = 0; i < arr.length; i += 1) {
			this.insert(arr[i]);
		}
	}

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
		while (this.heap[index] > this.heap[Math.floor(index / 2)]) {
			let temp = this.heap[index];
			this.heap[index] = this.heap[Math.floor(index / 2)];
			this.heap[Math.floor(index / 2)] = temp;
			index = Math.floor(index / 2);
		}
	}

	this.deleteRoot = function () {
		const root = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap[this.heap.length - 1] = root;
		const value = this.heap.pop();
		let index = 0;
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
const array = [4, 3, 2, 1];
console.log('build heap based on 1, 2, 3 and 4:');
heap.build(array);
console.log(heap);
console.log(heap.deleteRoot());
console.log(heap.deleteRoot());
console.log(heap.deleteRoot());
console.log(heap.deleteRoot());