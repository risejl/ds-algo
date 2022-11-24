"""
class MyStack:
    '''
    implement stack using python
    '''
    def __init__(self):
        self.stack = list()
        self.top = -1

    def isEmpty(self):
        if self.top == -1:
            return True
        else:
            return False

    def push(self, value):
        self.top += 1
        self.stack.append(value)

    def pop(self):
        if self.isEmpty():
            return False
        else:
            self.top -= 1
            return self.stack.pop()

    def getTop(self):
        if self.isEmpty():
            return False
        else:
            return self.stack[self.top]

    def print(self):
        if self.isEmpty():
            return False
        else:
            for i in range(len(self.stack)):
                print(self.stack[i])
    
    def peek(self, pos):
        if self.isEmpty():
            return False
        else:
            return self.stack[pos]


# test code
stack = MyStack()
print("push 1 and 2 to stack")
stack.push(1)
stack.push(2)
print("is stack empty?")
print(stack.isEmpty())
print("pop 2 out of stack")
print(stack.pop())
print("get the top element of stack:")
print(stack.getTop())
print("push 3 to stack:")
stack.push(3)
stack.print()
print("push 4 to stack")
stack.push(4)
print("get the third element:")
print(stack.peek(2))
"""

class Node:
    def __init__(self, value, next):
        self.value = value
        self.next = next

class MyStack:
    def __init__(self, head = None):
        self.head = None

    def isEmpty(self):
        if self.head == None:
            return True
        else:
            return False

    def push(self, value, next = None):
        node = Node(value, next)
        node.next = self.head
        self.head = node

    def pop(self):
        if self.isEmpty():
            return False
        else:
            node = self.head
            self.head = self.head.next
            return node

    def getTop(self):
        if self.isEmpty():
            return False
        else:
            return self.head

    def peek(self, pos):
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
        if self.isEmpty():
            return False
        p = self.head
        while p != None:
            print(p)
            p = p.next

# test code
stack = MyStack()
print("stack is empty:")
print(stack.isEmpty())
print("add element 1 and 2:")
stack.push(1)
stack.push(2)
stack.print()
print("get top element from stack:")
print(stack.getTop())
print("add element 3:")
stack.push(3)
print("get second element:")
print(stack.peek(1))
print("pop element:")
print(stack.pop())
print("stack is empty:")
print(stack.isEmpty())