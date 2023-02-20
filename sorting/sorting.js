/*
//bubble sort
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

//insertion sort
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

//selection sort
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

//count sort
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


//bucket sort
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

// radix sort
const radixSort = function (arr) {
  let maxDigits = Math.max(...arr).toString().length;
  let bucket = [];
  for (let i = 0; i <= 9; i += 1) {
    bucket.push([]);
  }
  for (let digit = 0; digit < maxDigits; digit += 1) {
    for (let i = 0; i < arr.length; i += 1) {
      let num = arr[i];
      let placeValue = Math.pow(10, digit);
      let digitValue = Math.floor(num / placeValue) % 10;
      bucket[digitValue].push(num);
    }
    let sortedArr = [];
    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i].length !== 0) sortedArr.push(...bucket[i]);
    }
    for (let i = 0; i <= 9; i += 1) {
      bucket[i] = [];
    }
    arr = sortedArr;
  }
  return arr;
}

// two way merge
const merge = function (arr1, arr2) {
	let mergedArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
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

// merging within one array
const mergeWithinOne = function (arr, low, mid, high) {
	let i = low;
	let j = mid+1;
	let mergeArr = [];
	while (i <= mid && j <= high) {
		if (arr[i] < arr[j]) {
			mergeArr.push(arr[i]);
			i += 1;
		} else {
			mergeArr.push(arr[j]);
			j += 1;
		}
	}
	while (i <= mid) {
		mergeArr.push(arr[i]);
		i += 1;
	}
	while (j <= high) {
		mergeArr.push(arr[j]);
		j += 1;
	}
	for (let k = 0; k < mergeArr.length; k += 1) {
		arr[k+low] = mergeArr[k];
	}
} 

// merge sort iterative version
const mergeSortI = function (arr) {
	let p = 2;
	for (; p <= arr.length; p *= 2) {
		for (let i = 0; i + p <= arr.length; i += p) {
			let low = i;
			let high = i + p - 1;
			let mid = Math.floor((high + low) / 2);
			mergeWithinOne(arr, low, mid, high);
		}
	}
	if (p/2 < arr.length) {
		mergeWithinOne(arr, 0, p/2, arr.length-1);
	}
}

// merge sort recursive version
const mergeSortR = function (arr, low, high) {
 	if (low < high) {
 		let mid = Math.floor((high+low)/2);
 		mergeSortR(arr, low, mid);
 		mergeSortR(arr, mid+1, high);
 		mergeWithinOne(arr, low, mid, high);
 	}
}

// sorting the pivot to the right position
const partition = function (arr, low, high) {
	let i = low;
	let j = high;
	let pivot = i;
	while (i <= j) {
		while (arr[i] < arr[pivot]) i += 1;
		while (arr[j] > arr[pivot]) j -= 1;
		if (i <= j) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i += 1;
			j -= 1;
		}
	}
	let temp = arr[pivot];
	arr[pivot] = arr[j];
	arr[j] = temp;
	return j;
}

// quick sort
const quickSort = function (arr, low, high) {
	if (low < high) {
		let pivot = partition(arr, low, high);
		quickSort(arr, low, pivot-1);
		quickSort(arr, pivot+1, high);
	}
}
*/
