class MyHeap:
	'''
	implement heap using python
	'''
	def __init__(self):
		self.heap = list()

	def insert(self, value):
		self.heap.append(value)
		index = len(self.heap) - 1
		while self.heap[index] > self.heap[int(index / 2)]:
			temp = self.heap[index]
			self.heap[index] = self.heap[int(index / 2)]
			self.heap[int(index / 2)] = temp

	def delete_root(self):
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
		for i in range(len(arr)):
			self.insert(arr[i])

	def sort(self):
		sorted_arr = list()
		for i in range(len(self.heap)):
			sorted_arr.append(self.delete_root())
		return sorted_arr

# test code
heap = MyHeap()
array = [1, 2, 3, 4]
print('build heap based on 1, 2, 3 and 4:')
heap.build(array)
print(heap.heap)
print(heap.sort())
