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

def selection_sort(arr):
	'''
	selection sort
	'''
	for i in range(len(arr)):
		min = i 
		for j in range(i + 1, len(arr)):
			if arr[j] < arr[min]:
				min = j
		temp = arr[i]
		arr[i] = arr[min]
		arr[min] = temp

def insertion_sort(arr):
	'''
	insertion sort
	'''
	for i in range(1, len(arr)):
		min_index = i
		min_value = arr[i]
		for j in range(i - 1, -1, -1):
			if arr[j] > min_value:
				arr[j+1] = arr[j]
				min_index = j
		arr[min_index] = min_value

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

def bucket_sort(arr):
	'''
	bucket sort
	'''
	bucket = list()
	for i in range(10):
		bucket.append(list())
	for i in arr:
		bucket[int(i / 10)].append(i)
	for i in range(len(bucket)):
		bucket[i].sort()
	sorted_arr = list()
	for i in range(len(bucket)):
		if len(bucket[i]) > 0:
			sorted_arr.append(bucket[i].copy())
	return sorted_arr

def two_way_merge(arr1, arr2):
	'''
	two way merging
	'''
	arr1 = sorted(arr1)
	arr2 = sorted(arr2)
	i = 0
	j = 0
	merged_arr = list()
	while (i < len(arr1) and j < len(arr2)):
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

def merge_within_one(arr, low, mid, high):
	'''
	merging within one array
	'''
	i = low 
	j = mid+1
	merged_arr = list()
	while i <= mid and j <= high:
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
	for i in range(len(merged_arr)):
		arr[i+low] = merged_arr[i]

def merge_sort_i(arr):
	'''
	merge sort iterative version
	'''
	p = 2
	while p <= len(arr):
		i = 0
		while i + p <= len(arr):
			low = i
			high = i + p - 1
			mid = math.floor((low + high)/2)
			merge_within_one(arr, low, mid, high)
			i += p 
		p *= 2
	if p / 2 < len(arr):
		merge_within_one(arr, 0, int(p/2), len(arr)-1)

def merge_sort_r(arr, low, high):
	'''
	merge sort recursive version
	'''
	if low < high:
		mid = math.floor((low + high)/2)
		merge_sort_r(arr, low, mid)
		merge_sort_r(arr, mid+1, high)
		merge_within_one(arr, low, mid, high)


def partition(arr, low, high):
	'''
	sorting the pivot to the right position
	'''
	i = low 
	j = high 
	pivot = i 
	while i <= j:
		while arr[i] < arr[pivot]:
			i += 1
		while arr[j] > arr[pivot]:
			j -= 1
		if i <= j:
			temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
			i += 1
			j -= 1
	temp = arr[pivot]
	arr[pivot] = arr[j]
	arr[j] = temp
	return j

def quick_sort(arr, low, high):
	'''
	quick sort
	'''
	if low < high:
		pivot = partition(arr, low, high)
		quick_sort(arr, low, pivot-1)
		quick_sort(arr, pivot+1, high)
"""

def radix_sort(arr):
	'''
	radix sort
	'''
	max_digits = len(str(max(arr)))
	bucket = list()
	for i in range(0, 10):
		bucket.append(list())
	for digit in range(max_digits):
		for i in range(len(arr)):
			num = arr[i]
			place_value = math.pow(10, digit)
			digit_value = math.floor(num[i] / place_value) % 10
			bucket[digit_value].append(num)
		sorted_arr = list()
		for i in range(len(bucket)):
			if len(bucket[i]) != 0:
				sorted_arr.append(bucket[i].copy())
		for i in range(0, 10):
			bucket[i] = []
		arr = sorted_arr
	return sorted_arr

# test code
arr = [237,146,259,348,152,163,235,48,36,62]
print(radix_sort(arr))