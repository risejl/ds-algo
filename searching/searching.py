"""
def linear_search(li, target):
	'''
	implement linear search using python
	'''
	for i in range(len(li)):
		if li[i] == target:
			return i
	return -1

# test code
arr = [1,2,3,4,5,6]
target = 3
anoTar = 10
print("is 3 in array:")
print(linear_search(arr, target))
print("is 10 in array:")
print(linear_search(arr, anoTar))
"""

"""
def binary_search(li, target):
	'''
	implement binary search using python
	'''
	low = 0
	high = len(li) - 1
	while low <= high:
		mid = low + int((high - low) / 2)
		if li[mid] == target:
			return mid
		elif li[mid] > target:
			high = mid - 1
		else:
			low = mid + 1
	return -1
"""

def binary_search_r(li, target):
    '''
    implement binary search recursive version
    '''
    return binary_search_internally(li, 0, len(li) - 1, target)

def binary_search_internally(li, low, high, target):
    mid = int(low + (high - low) / 2)
    if low > high:
        return -1
    if li[mid] == target:
        return mid
    elif li[mid] > target:
        return binary_search_internally(li, low, high - 1, target)
    else:
        return binary_search_internally(li, mid + 1, high, target)


# test code
arr = [1,2,3,4,5,6]
target = 3
anoTar = 10
print("is 3 in array:")
print(binary_search_r(arr, target))
print("is 10 in array:")
print(binary_search_r(arr, anoTar))
