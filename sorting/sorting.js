// implement bubble sort using javascript
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

// test code
const print = function (arr) {
	arr.map((item) => {
		console.log(item);
	});
}

array = [3, 6, 2, 4, 1, 0, 5];
console.log("original array:");
print(array);
bubbleSort(array);
console.log("sorted array:");
print(array);