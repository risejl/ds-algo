from typing import Any

class MyStack:
    '''
    stack for depth first search
    '''
    def __init__(self) -> None:
        self.stack: list = list()

    def push(self, element: Any) -> None:
        self.stack.append(element)

    def pop(self) -> Any:
        return self.stack.pop()

    def is_empty(self) -> bool:
        if len(self.stack) == 0:
            return True
        else:
            return False

class MyQueue:
    '''
    queue for breadth first search
    '''
    def __init__(self) -> None:
        self.queue:list = list()

    def enqueue(self, element: Any) -> None:
        self.queue.append(element)

    def dequeue(self) -> Any:
        if not self.is_empty():
            return self.queue.pop(0)

    def is_empty(self) -> bool:
        if len(self.queue) != 0:
            return False
        else:
            return True

    def get_front(self) -> bool:
        if not self.is_empty():
            return self.queue[0]
        else:
            return False

class Node:
	def __init__(self, vertex: Any, weight: Any=0, next: 'Node'=None) -> None:
		self.vertex: Any = vertex
		self.weight: Any = weight
		self.next: 'Node' = next

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

class AdjacencyMatrix:
	'''
	implement adjacency matrix
	'''
	def __init__(self, vertices_len: int, is_directed: bool=False) -> None:
		self.is_directed = is_directed
		self.graph = [[] for _ in range(vertices_len)]
		for i in range(vertices_len):
			self.graph[i] = [None for j in range(vertices_len)]

	def add_edge(self, start: int, end: int, weight: Any=0) -> None:
		if self.is_directed == True:
			self.graph[start][end] = weight
		elif self.is_directed == False:
			self.graph[start][end] = weight
			self.graph[end][start] = weight

class MyGraph:
	'''
	adjacencylist-based graph
	'''
	def __init__(self, imp_type: str, vertices: list=list()) -> None:
		if imp_type == 'matrix':
			self.graph = AdjacencyMatrix(len(vertices), True)

		elif imp_type == 'linkedlist':
			self.vertices:list = list()
			for i in vertices:
				node = Node(i)
				adj_list = Adjacencylist(node)
				self.vertices.append(adj_list)


# test code
vertices = [1,2,3,4]
'''
graph = MyGraph('linkedlist', vertices)
graph.vertices[0].add_edge(2);
graph.vertices[0].add_edge(4);
graph.vertices[1].add_edge(3);
graph.vertices[2].add_edge(1);
graph.vertices[3].add_edge(4);
print(graph.vertices)
'''
graph = MyGraph('matrix', vertices)
print(graph.graph.graph)
graph.graph.add_edge(1, 2, 2)
print(graph.graph.graph)