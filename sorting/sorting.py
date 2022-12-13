import math

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

"""
def merge(arr1, arr2):
	'''
	two way merging
	'''
	arr1.sort()
	arr2.sort()
	i = 0
	j = 0
	merged_arr = list()
	while (i < len(arr1)) and (j < len(arr2)):
		if arr1[i] < arr2[j]:
			merged_arr.append(arr1[i])
			i += 1
		else:
			merged_arr.append(arr2[j])
			j += 1
	while i < len(arr1):
		merged_arr.append(arr1[i])
		i += 1
	while j < len(arr2):
		merged_arr.append(arr2[j])
		j += 1
	return merged_arr
"""

def merge_within_one(arr, low, mid, high):
	'''
	merge within one array
	'''
	i = low
	j = mid + 1
	merged_arr = list()
	while (i <= mid) and (j <= high):
		if arr[i] < arr[j]:
			merged_arr.append(arr[i])
			i += 1
		else:
			merged_arr.append(arr[j])
			j += 1
	while i <= mid:
		merged_arr.append(arr[i])
		i += 1
	while j <= high:
		merged_arr.append(arr[j])
		j += 1
	return merged_arr

def merge_sort_r(arr, low, high):
	'''
	merge sort recursive version
	'''
	if low < high:
		mid = math.floor(low + (high - low) / 2)
		merge_sort_r(arr, low, mid)
		merge_sort_r(arr, mid+1, high)
		print(merge_within_one(arr, low, mid, high))

def print_array(arr):
	for i in arr:
		print(i)

# test code
array = [33, 16, 22, 42, 12, 1, 5, 8]
#array2 = [5,4,8,7,1]
merged_arr = merge_sort_r(array, 0, len(array)-1)
print(merged_arr)
#print("origin array:")
#print_array(array)
#print("sorted array:")
#print_array(arr)