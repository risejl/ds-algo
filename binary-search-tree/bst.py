class Node:
	def __init__(self, value, left = None, right = None):
		self.value = value
		self.left = left
		self.right = right 


class MyBinarySearchTree:
	'''
	implement binary search tree using python
	'''
	def __init__(self, root = None):
		self.root = root

	def inorder_traversal(self, root):
		'''
		bst sort
		'''
		if root == None:
			return
		self.inorder_traversal(root.left)
		print(root.value)
		self.inorder_traversal(root.right)

	def search(self, target, root = None):
		'''
		search a node of a given value
		'''
		if root == None:
			return
		if root.value == target:
			print(root.value)
		elif root.value < target:
			self.search(target, root.right)
		else:
			self.search(target, root.left)

	def insert(self, value):
		'''
		insert a node to bst
		'''
		if self.root == None:
			node = Node(value)
			self.root = node 
		p = self.root 
		while p.left != None or p.right != None:
			if p.value <= value:
				p = p.right
			else:
				p = p.left
		node = Node(value)
		if value >= p.value:
			p.right = node
		else:
			p.left = node

	def delete(self, value):
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

# test code
node = Node(2)
left = Node(1)
right = Node(3)
node.left = left
node.right = right
bst = MyBinarySearchTree(node)
print('binary search tree looks like:')
print(bst)
print('binary search tree inorder traversal, which is also a sort array:')
bst.inorder_traversal(node)
print('search node of value 1:')
bst.search(1, node)
print("insert node of value 4:")
bst.insert(4)
print(right.right.value)
print('delete node of value 3:')
print(bst.delete(2))
print(right.value)