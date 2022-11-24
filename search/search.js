// implement linear search using javascript
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i;
	}
	return -1;
}

// test code
const arr = [1,2,3,4,5,6];
const target = 3;
const anoTar = 10;
console.log("is 3 in array:");
console.log(linearSearch(arr, target));
console.log("is 10 in array:");
console.log(linearSearch(arr, anoTar));


// binary search
/*
function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		if (arr[mid] === target) return mid;
		else if (arr[mid] > target) high = mid - 1;
		else low = mid + 1;
	}
	return -1;
}

// test code
const arr = [1,2,3,4,5,6];
const target = 3;
const anoTar = 10;
console.log("is 3 in array:");
console.log(binarySearch(arr, target));
console.log("is 10 in array:");
console.log(binarySearch(arr, anoTar));
*/