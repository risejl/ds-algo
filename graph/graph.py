class MyStack:
    '''
    stack for depth first search
    '''
    def __init__(self):
        self.stack = list()

    def push(self, element):
        self.stack.append(element)

    def pop(self):
        return self.stack.pop()

    def is_empty(self):
        if len(self.stack) == 0:
            return True
        else:
            return False

class MyQueue:
    '''
    queue for breadth first search
    '''
    def __init__(self):
        self.queue = list()

    def enqueue(self, element):
        self.queue.append(element)

    def dequeue(self):
        if not self.is_empty():
            return self.queue.pop(0)

    def is_empty(self):
        if len(self.queue) != 0:
            return False
        else:
            return True

    def get_front(self):
        if not self.is_empty():
            return self.queue[0]
        else:
            return False

class Node:
	def __init__(self, vertex, weight=0, next=None):
		self.vertex = vertex
		self.weight = weight
		self.next = next

class Adjacencylist:
	'''
	implement adjacencylist
	'''
	def __init__(self, head=None):
		self.head = head

	def add_edge(self, vertex, weight=0, next=None):
		node = Node(vertex, weight)
		if self.head == None:
			self.head = node
		else:
			p = self.head
			while p.next != None:
				p = p.next 
			p.next = node

class MyGraph:
	'''
	adjacencylist-based graph
	'''
	def __init__(self, vertices):
		self.vertices = list()
		for i in vertices:
			node = Node(i)
			adj_list = Adjacencylist(node)
			self.vertices.append(adj_list)


# test code
vertices = [1,2,3,4]
graph = MyGraph(vertices)
graph.vertices[0].add_edge(2);
graph.vertices[0].add_edge(4);
graph.vertices[1].add_edge(3);
graph.vertices[2].add_edge(1);
graph.vertices[3].add_edge(4);