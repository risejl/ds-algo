"""
def linear_search(li, target):
	'''
	implement linear search by python
	'''
	for i in range(len(li)):
		if li[i] == target:
			return i
	return -1
"""

"""
def binary_search(li, target):
	'''
	implement binary search by python
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

