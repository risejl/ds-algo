/**
 * bubble sort
const bubbleSort = function (arr) {
	for (let i = 0; i < arr.length; i += 1) {
		for (let j = i; j < arr.length; j += 1) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
}
*/

/**
 * insertion sort
const insertionSort = function (arr) {
	for (let i = 1; i < arr.length; i += 1) {
		let min = i;
		const minValue = arr[i];
		for (let j = i - 1; j >= 0; j -= 1) {
			if (arr[j] > minValue) {
				arr[j+1] = arr[j];
				min = j;
			}
		}
		arr[min] = minValue;
	}
}
*/

/**
 * selection sort
const selectionSort = function (arr) {
	for (let i = 0; i < arr.length; i += 1) {
		let min = i;
		for (let j = i; j < arr.length; j += 1) {
			if (arr[j] < arr[min]) min = j;
		}
		let temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
}
*/

/**
 * count sort
const countSort = function (arr) {
	const max = Math.max(...arr);
	let bucket = new Array(max + 1);
	for (let i = 0; i < bucket.length; i += 1) {
		bucket[i] = 0;
	}
	for (let i = 0; i < arr.length; i += 1) {
		bucket[arr[i]] += 1;
	}
	let i = 0;
	let sortedArr = [];
	while (i < bucket.length) {
		if (bucket[i] > 0) {
			sortedArr.push(i);
			bucket[i] -= 1;
		} else i += 1;
	}
	return sortedArr;
}
*/


/**
 * bucket sort
const bucketSort = function (arr) {
	let bucket = [];
	for (let i = 0; i <= 9; i += 1) {
		bucket.push([]);
	}
	for (let i = 0; i < arr.length; i += 1) {
		bucket[Math.floor(arr[i] / 10)].push(arr[i]);
	}
	for (let i = 0; i < bucket.length; i += 1) {
		bucket[i].sort((a, b) => a - b);
	}
	let sortedArr = [];
	for (let i = 0; i < bucket.length; i += 1) {
		if (bucket[i].length > 0) {
			sortedArr.push(...bucket[i]);
		}
	}
	return sortedArr;
}
*/


// test code
const print = function (arr) {
	arr.map((item) => {
		console.log(item);
	});
}

array = [33, 65, 21, 14, 11, 0, 5];
//array2 = [1,9,6,4,2,0];
//console.log(merge(array, array2));
console.log("original array:");
print(array);
console.log("sorted array:");
print(array);