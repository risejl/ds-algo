from typing import Any, Optional

class MyQueue:
	'''
	implement array-based queue using python
	'''
	def __init__(self) -> None:
		self.queue: list = list()
		self.front: int = -1
		self.rear: int = -1

	def is_empty(self) -> bool:
		if self.rear == self.front:
			return True
		else:
			return False

	def enqueue(self, value: Any) -> None:
		self.rear += 1
		self.queue.append(value)

	def dequeue(self) -> Optional[Any]:
		if self.is_empty():
			return False
		else:
			self.front += 1
			return self.queue.pop(0)

	def get_rear(self) -> Optional[Any]:
		if self.is_empty():
			return False
		else:
			return self.queue[len(self.queue) - 1]

	def get_front(self) -> Optional[Any]:
		if self.is_empty():
			return False
		else:
			return self.queue[0]

	def print(self) -> None:
		if self.is_empty():
			return False
		else:
			for i in range(len(self.queue)):
				print(self.queue[i])



class Node:
	def __init__(self, value: Any, next: Optional['Node']=None) -> None:
		self.value: Any = value
		self.next: Optional['Node'] = next

class MyQueue:
	'''
	implement linkedlist-based queue using python
	'''
	def __init__(self) -> None:
		self.front: Optional['Node'] = None
		self.rear: Optional['Node'] = None

	def is_empty(self) -> bool:
		'''
		whether a queue is empty
		'''
		if self.front == None:
			return True
		else:
			return False

	def enqueue(self, value: Any, next: Optional['Node']=None) -> None:
		'''
		an element enter to the rear of queue
		'''
		node = Node(value, next)
		if self.rear == None:
			self.rear = node
			self.front = node
		else:
			self.rear.next = node
			self.rear = node
		
	def dequeue(self) -> Optional['Node']:
		'''
		an element remove from the front of queue
		'''
		if self.is_empty():
			return False
		else:
			node = self.front
			self.front = self.front.next
			return node

	def get_rear(self) -> Optional['Node']:
		'''
		get the element from the rear of queue
		'''
		if self.is_empty():
			return False
		else:
			return self.rear

	def get_front(self) -> Optional['Node']:
		'''
		get the element from the front of queue
		'''
		if self.is_empty():
			return False
		else:
			return self.front

	def print(self) -> bool:
		'''
		print all elements
		'''
		p = self.front
		if self.is_empty():
			return False
		else:
			while p != None:
				print(p)
				p = p.next
