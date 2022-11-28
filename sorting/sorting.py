"""
def bubble_sort(arr):
	'''
	bubble sort
	'''
	for i in range(len(arr)):
		for j in range(i, len(arr)):
			if arr[i] > arr[j]:
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
"""

"""
def insertion_sort(arr):
	'''
	insertion sort
	'''
	for i in range(len(arr)):
		min = i 
		for j in range(i + 1, len(arr)):
			if arr[j] < arr[min]:
				min = j
		temp = arr[i]
		arr[i] = arr[min]
		arr[min] = temp
"""

"""
def count_sort(arr):
	'''
	count sort
	'''
	max_value = max(arr)
	bucket = [0] * (max_value + 1)
	for i in range(len(bucket)):
		bucket[arr[i]] += 1
	sorted_arr = list()
	i = 0
	while i < len(bucket):
		if bucket[i] > 0:
			sorted_arr.append(i)
			bucket[i] -= 1
		else:
			i += 1
	return sorted_arr
"""


def print_array(arr):
	for i in arr:
		print(i)

# test code
array = [33, 16, 22, 42, 12, 1, 5]
print("origin array:")
print_array(array)
print("sorted array:")
print_array(arr)