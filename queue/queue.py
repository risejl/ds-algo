"""
class MyQueue:
	'''
	implement array-based queue using python
	'''
	def __init__(self):
		self.queue = list()
		self.front = -1
		self.rear = -1

	def is_empty(self):
		if self.rear == self.front:
			return True
		else:
			return False

	def enqueue(self, value):
		self.rear += 1
		self.queue.append(value)

	def dequeue(self):
		if self.is_empty():
			return False
		else:
			self.front += 1
			return self.queue.pop(0)

	def get_rear(self):
		if self.is_empty():
			return False
		else:
			return self.queue[len(self.queue) - 1]

	def get_front(self):
		if self.is_empty():
			return False
		else:
			return self.queue[0]

	def print(self):
		if self.is_empty():
			return False
		else:
			for i in range(len(self.queue)):
				print(self.queue[i])

# test code
queue = MyQueue();
print("element 1 and 2 enqueue:");
queue.enqueue(1);
queue.enqueue(2);
queue.print();
print("is queue empty?");
print(queue.is_empty());
print("get the rear element of queue:");
print(queue.get_rear());
print("front element dequeue:");
print(queue.dequeue());
print("get the front element:");
print(queue.get_front());
"""
class Node:
	def __init__(self, value, next=None):
		self.value = value
		self.next = next

class MyQueue:
	'''
	implement linkedlist-based queue using python
	'''
	def __init__(self):
		self.front = None
		self.rear = None


	def is_empty(self):
		if self.front == None:
			return True
		else:
			return False

	def enqueue(self, value, next=None):
		node = Node(value, next)
		if self.rear == None:
			self.rear = node
			self.front = node
		else:
			self.rear.next = node
			self.rear = node
		
	def dequeue(self):
		if self.is_empty():
			return False
		else:
			node = self.front
			self.front = self.front.next
			return node

	def get_rear(self):
		if self.is_empty():
			return False
		else:
			return self.rear

	def get_front(self):
		if self.is_empty():
			return False
		else:
			return self.front

	def print(self):
		p = self.front
		if self.is_empty():
			return False
		else:
			while p != None:
				print(p)
				p = p.next


# test code
queue = MyQueue();
print("element 1 and 2 3 enqueue:");
queue.enqueue(1);
queue.enqueue(2);
queue.print();
print("is queue empty?");
print(queue.is_empty());
print("get the rear element of queue:");
print(queue.get_rear().value);
print("front element dequeue:");
print(queue.dequeue().value);
print("get the front element:");
print(queue.get_front().value);
