class Node:
	def __init__(self, value, next=None):
		self.value = value
		self.next = next

class Adjacencylist:
	'''
	implement adjacencylist
	'''
	def __init__(self, head=None):
		self.head = head

	def add_edge(self, value, next=None):
		node = Node(value)
		if self.head == None:
			self.head = node
		else:
			self.head.next = node
			self.head = node

class Graph:
	'''
	djacencylist-based graph
	'''
	def __init__(self, source=None):
		self.source = source


# test code
node1 = Node(1)
node2 = Node(2)
node1.next = node2
list1 = Adjacencylist(node1)
node3 = Node(3)
list2 = Adjacencylist(node3)
list2.add_edge(list1)
graph = Graph(list1)
print(graph.source.head.value)