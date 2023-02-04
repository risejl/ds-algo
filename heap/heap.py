class MyHeap:
	'''
	implement heap using python
	'''
	def __init__(self):
		self.heap = list()

	def insert(self, value):
		'''
		insert a node to a heap
		'''
		self.heap.append(value)
		index = len(self.heap) - 1
		parent_index = 0
		if index % 2 == 0:
			parent_index = (index - 1) / 2
		else:
			parent_index = index / 2
		while self.heap[index] > self.heap[int(parent_index)]:
			temp = self.heap[index]
			self.heap[index] = self.heap[int(parent_index)]
			self.heap[int(parent_index)] = temp
			index = int(parent_index)
			if index % 2 == 0:
				parent_index = (index - 1) / 2
			else:
				parent_index = index / 2

	def delete_root(self):
		'''
		delete root node from a heap
		'''
		root = self.heap[0]
		self.heap[0] = self.heap[len(self.heap) - 1]
		self.heap[len(self.heap) - 1] = root 
		value = self.heap.pop()
		index = 0 
		if (index + 2 < len(self.heap)) and (self.heap[index + 1] > self.heap[index + 2]):
			temp = self.heap[index]
			self.heap[index] = self.heap[index + 1]
			self.heap[index + 1] = temp
			index += 1
		elif (index + 2 < len(self.heap)) and (self.heap[index + 1] < self.heap[index + 2]):
			temp = self.heap[index]
			self.heap[index] = self.heap[index + 2]
			self.heap[index + 2] = temp
			index += 2
		while (2 * index + 1 < len(self.heap)) and (self.heap[index] < self.heap[index * 2]) and (self.heap[index] < self.heap[index * 2 + 1]):
			if self.heap[index * 2] > self.heap[index * 2 + 1]:
				temp = self.heap[index]
				self.heap[index] = self.heap[index * 2]
				self.heap[index * 2] = temp
				index = 2 * index

			elif self.heap[index * 2] < self.heap[index * 2 + 1]:
				temp = self.heap[index]
				self.heap[index] = self.heap[index * 2 + 1]
				self.heap[index * 2 + 1] = temp
				index = 2 * index + 1
		return value

	def build(self, arr):
		'''
		build a heap
		'''
		for i in range(len(arr)):
			self.insert(arr[i])

	def sort(self):
		'''
		heap sort
		'''
		sorted_arr = list()
		for i in range(len(self.heap)):
			sorted_arr.append(self.delete_root())
		return sorted_arr

# test code
heap = MyHeap()
array = [0,10,20,30,25,5,40,35]
print('build heap:')
heap.build(array)
print(heap.heap)
print(heap.sort())