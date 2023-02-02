/*
// implement linear search by javascript
const linearSearch = function (arr, target) {
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] === target) return i;
	}
	return -1;
}
*/


/*
// binary search loop version
const binarySearch = function (arr, target) {
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
*/

// binary search recursive version
const binarySearchR = function (arr, target) {
  return binarySearchInternally(arr, 0, arr.length - 1, target);
}

const binarySearchInternally = function (arr, low, high, target) {
  let mid = low + Math.floor((high - low) / 2);
  if (low > high) return -1; 
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearchInternally(arr, low, mid - 1, target);
  else return binarySearchInternally(arr, mid + 1, high, target);
}

