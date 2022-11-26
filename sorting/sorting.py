def bubble_sort(arr):
	'''
	implement bubble sort using python
	'''
	for i in range(len(arr)):
		for j in range(i, len(arr)):
			if arr[i] > arr[j]:
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp

def print_array(arr):
	for i in arr:
		print(i)


# test code
array = [3, 6, 2, 4, 1, 0, 5]
print("origin array:")
print_array(array)
bubble_sort(array)
print("sorted array:")
print_array(array)