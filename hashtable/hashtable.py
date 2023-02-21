from typing import Any

class Node:
	def __init__(self, value: Any, next: 'Node'= None) -> None:
		self.value: Any = value 
		self.next: 'Node' = next 

class MyLinkedList:
	def __init__(self, head: 'Node'= None) -> None:
		self.head: 'Node' = head 

class Data:
	def __init__(self, value: Any, flag: bool, key: Any) -> None:
		self.value: Any = value 
		self.flag: bool = flag
		self.key: Any = key

class MyHashTable:
	def __init__(self, size: int) -> None:
		self.hashtable = list()
		for i in range(size):
			self.hashtable.append(None)

	def hash(self, value: Any) -> Any:
		'''
		hash function
		'''
		key = value % len(self.hashtable)
		return key

	def double_hash(self, value: Any, prime_number: int) -> Any:
		'''
		double hashing
		'''
		first_key = self.hash(value)
		second_key = prime_number - (value % prime_number)
		key = first_key + second_key
		return key

	def chaining_insert(self, value: Any) -> None:
		'''
		insert a element by chaining
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			node = Node(value)
			linked_list = MyLinkedList()
			linked_list.head = node 
			self.hashtable[key] = linked_list
		else:
			node = Node(value)
			p = self.hashtable[key].head
			while p.next != None:
				p = p.next 
			p.next = node

	def chaining_search(self, value: Any) -> bool:
		'''
		searching a element on chains
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			return False
		else:
			p = self.hashtable[key].head
			while p != None:
				if p.value == value:
					return True
				else:
					p = p.next
			return False

	def chaining_delete(self, value: Any) -> None:
		'''
		delete a element on chains
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			return
		else:
			p = self.hashtable[key].head
			if p.value == value:
				self.hashtable[key].head = self.hashtable[key].head.next 
				if self.hashtable[key].head == None:
					self.hashtable[key] = None
					return
			else:
				while p.next != None and p != None:
					if p.next.value == value:
						p.next = p.next.next 
						return
					else:
						p = p.next 

	def linear_probling_insert(self, value: Any) -> bool:
		'''
		insert a element by linear probing
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			data = Data(value, True, key)
			self.hashtable[key] = data
		else:
			for i in range(key + 1, len(self.hashtable)):
				if self.hashtable[i] == None:
					data = Data(value, False, key)
					self.hashtable[i] = data
					return True
			for i in range(key):
				if self.hashtable[i] == None:
					data = Data(value, False, key)
					self.hashtable[i] = data
					return True
			return False

	def linear_probling_search(self, value: Any) -> bool:
		'''
		searching a element by linear probing
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			return False
		else:
			if self.hashtable[key].value == value:
				return True
			else:
				for i in range(key + 1, len(self.hashtable)):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						return True
				for i in range(key):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						return True
				return False

	def linear_probling_delete(self, value: Any) -> bool:
		'''
		delete a element by linear probing
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			return False
		else:
			if self.hashtable[key].value == value:
				self.hashtable[key] = None
				return True
			else:
				for i in range(key + 1, len(self.hashtable)):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						self.hashtable[i] = None
						return True
				for i in range(key):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						self.hashtable[i] = None
						return True
				return False

	def quadratic_probling_insert(self, value: Any) -> bool:
		'''
		insert a element by quadratic probing
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			data = Data(value, True, key)
			self.hashtable[key] = data
		else:
			for i in range(key + 1, len(self.hashtable), 2):
				if self.hashtable[i] == None:
					data = Data(value, False, key)
					self.hashtable[i] = data
					return True
			for i in range(0, key, 2):
				if self.hashtable[i] == None:
					data = Data(value, False, key)
					self.hashtable[i] = data
					return True
			return False

	def quadratic_probling_search(self, value: Any) -> bool:
		'''
		searching a element by quadratic probing
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			return False
		else:
			if self.hashtable[key].value == value:
				return True
			else:
				for i in range(key + 1, len(self.hashtable), 2):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						return True
				for i in range(0, key, 2):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						return True
				return False

	def quadratic_probling_delete(self, value: Any) -> bool:
		'''
		delete a element by quadratic probing
		'''
		key = self.hash(value)
		if self.hashtable[key] == None:
			return False
		else:
			if self.hashtable[key].value == value:
				self.hashtable[key] = None
				return True
			else:
				for i in range(key + 1, len(self.hashtable), 2):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						self.hashtable[i] = None
						return True
				for i in range(0, key, 2):
					if self.hashtable[i] == None:
						continue
					elif self.hashtable[i].value == value:
						self.hashtable[i] = None
						return True
				return False