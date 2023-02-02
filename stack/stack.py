"""
class MyStack:
    '''
    implement stack by python
    '''
    def __init__(self):
        self.stack = list()
        self.top = -1

    def is_empty(self):
        if self.top == -1:
            return True
        else:
            return False

    def push(self, value):
        self.top += 1
        self.stack.append(value)

    def pop(self):
        if self.is_empty():
            return False
        else:
            self.top -= 1
            return self.stack.pop()

    def get_top(self):
        if self.is_empty():
            return False
        else:
            return self.stack[self.top]

    def print(self):
        if self.is_empty():
            return False
        else:
            for i in range(len(self.stack)):
                print(self.stack[i])
    
    def peek(self, pos):
        if self.is_empty():
            return False
        else:
            return self.stack[pos]

"""

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class MyStack:
    def __init__(self, head=None):
        self.head = None

    def is_empty(self):
        '''
        whether a stack is empty
        '''
        if self.head == None:
            return True
        else:
            return False

    def push(self, value, next=None):
        '''
        push an element to the top of a stack
        '''
        node = Node(value, next)
        node.next = self.head
        self.head = node

    def pop(self):
        '''
        pop an element from the top of a stack
        '''
        if self.is_empty():
            return False
        else:
            node = self.head
            self.head = self.head.next
            return node

    def get_top(self):
        '''
        return the element of the top of a stack
        '''
        if self.is_empty():
            return False
        else:
            return self.head

    def peek(self, pos):
        '''
        return the element of a given position
        '''
        counter = 0
        p = self.head
        while p != None:
            if counter == pos:
                return p
            else:
                p = p.next
                counter += 1
        return False

    def print(self):
        '''
        print all elements
        '''
        if self.is_empty():
            return False
        p = self.head
        while p != None:
            print(p)
            p = p.next
