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