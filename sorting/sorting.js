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
 * merge
const merge = function (arr1, arr2) {
	let mergedArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length || j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArr.push(arr1[i]);
			i += 1;
		} else {
			mergedArr.push(arr2[j]);
			j += 1;
		}
	}
	while (i < arr1.length) {
		mergedArr.push(arr1[i]);
		i += 1;
	}
	while (j < arr2.length) {
		mergedArr.push(arr2[j]);
		j += 1;
	}
	return mergedArr;
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
print(arr);