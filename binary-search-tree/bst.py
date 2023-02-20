from typing import Any

class Node:
	def __init__(self, value: Any, left: 'Node'= None, right: 'Node'=None) -> None:
		self.value: Any = value
		self.left: 'Node' = left
		self.right: 'Node' = right 


class MyBinarySearchTree:
	'''
	implement binary search tree using python
	'''
	def __init__(self, root: 'Node'=None) -> None:
		self.root = root

	def inorder_traversal(self, root: 'Node') -> None: 
		'''
		bst sort
		'''
		if root == None:
			return
		self.inorder_traversal(root.left)
		print(root.value)
		self.inorder_traversal(root.right)

	def search(self, target: Any, root: 'Node'=None) -> None:
		'''
		search a node of a given value
		'''
		if root == None:
			print(False)
			return
		if root.value == target:
			print(True)
		elif root.value < target:
			self.search(target, root.right)
		else:
			self.search(target, root.left)

	def search_n_r(self, target: Any, root: 'Node'=None) -> bool:
		'''
		non-recursive version of search
		'''
		while root != None:
			if target == root.value:
				return True
			elif target > root.value:
				root = root.right
			else:
				root = root.left
		return False

	def insert(self, value: Any) -> None:
		'''
		insert a node to bst
		'''
		node = Node(value)
		if self.root == None:
			self.root = node 
			return

		p = self.root
		while p.left != None or p.right != None:
			if p.left == None and value < p.value:
				p.left = node 
				break
			elif p.right == None and value >= p.value:
				p.right = node 
				break 
			elif value >= p.value:
				p = p.right
			elif value < p.value:
				p = p.left
		if value >= p.value:
			p.right = node 
		else:
			p.left = node

	def delete(self, value: Any) -> None:
		'''
		delete a node from bst
		'''
		if self.root == None:
			return False
		p = self.root 
		prev = self.root
		while p != None:
			if p.value > value:
				prev = p
				p = p.left
			elif p.value < value:
				prev = p
				p = p.right
			else:
				break
		if p == None:
			return False
		if p.left == None and p.right == None:
			if prev.left == p:
				prev.left = None
			elif prev.right == p:
				prev.right = None
			return True
		if p.left != None or p.right != None:
			if p.left != None:
				if prev.left == p:
					prev.left = p.left
				elif prev.right == p:
					prev.right = p.left
			elif p.right != None:
				if prev.left == p:
					prev.left = p.right
				elif prev.right == p:
					prev.right = p.right
			return True
