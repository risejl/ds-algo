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

	def breadth_first_search(self, vertex: 'Node') -> None:
		'''
		breath first search
		'''
		visited = list()
		queue = MyQueue()
		queue.enqueue(vertex)
		p = vertex
		while len(queue.queue) != 0:
			while p.next != None:
				is_queue_have = False
				is_visited_have = False
				for i in range(len(queue.queue)):
					if queue.queue[i].vertex == p.next.vertex:
						is_queue_have = True
				for i in range(len(visited)):
					if visited[i].vertex == p.next.vertex:
						is_visited_have = True 
				if not is_visited_have and not is_queue_have:
					queue.enqueue(p.next)
					p = p.next 
				else:
					p = p.next 
			is_visited_have = False
			for i in range(len(visited)):
				if visited[i].vertex == queue.queue[0].vertex:
					is_visited_have = True
			if not is_visited_have:
				visited.append(queue.dequeue())
				if len(queue.queue) != 0:
					p = graph.vertices[queue.queue[0].vertex].head
		[print(item.vertex) for item in visited]


# test code
vertices = [0,1,2,3,4,5,6,7,8,9,10]
graph = MyGraph('linkedlist', vertices)
graph.vertices[1].add_edge(4)
graph.vertices[1].add_edge(2)
graph.vertices[2].add_edge(1)
graph.vertices[2].add_edge(3)
graph.vertices[2].add_edge(5)
graph.vertices[2].add_edge(7)
graph.vertices[2].add_edge(8)
graph.vertices[3].add_edge(2)
graph.vertices[3].add_edge(4)
graph.vertices[3].add_edge(9)
graph.vertices[3].add_edge(10)
graph.vertices[4].add_edge(1)
graph.vertices[4].add_edge(3)
graph.vertices[5].add_edge(2)
graph.vertices[5].add_edge(6)
graph.vertices[5].add_edge(8)
graph.vertices[5].add_edge(7)
graph.vertices[6].add_edge(5)
graph.vertices[6].add_edge(5)
graph.vertices[7].add_edge(5)
graph.vertices[7].add_edge(2)
graph.vertices[7].add_edge(8)
graph.vertices[8].add_edge(2)
graph.vertices[8].add_edge(5)
graph.vertices[8].add_edge(7)
graph.vertices[9].add_edge(3)
graph.vertices[10].add_edge(3)
graph.breadth_first_search(graph.vertices[1].head)