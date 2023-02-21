from typing import Any, Optional

class MyStack:
    '''
    implement stack by python
    '''
    def __init__(self) -> None:
        self.stack: list = list()
        self.top: int = -1

    def is_empty(self) -> bool:
        if self.top == -1:
            return True
        else:
            return False

    def push(self, value: Any) -> None:
        self.top += 1
        self.stack.append(value)

    def pop(self) -> Optional[Any]:
        if self.is_empty():
            return False
        else:
            self.top -= 1
            return self.stack.pop()

    def get_top(self) -> Optioanl[Any]:
        if self.is_empty():
            return False
        else:
            return self.stack[self.top]

    def print(self) -> bool:
        if self.is_empty():
            return False
        else:
            for i in range(len(self.stack)):
                print(self.stack[i])
    
    def peek(self, pos: int) -> Optional[Any]:
        if self.is_empty():
            return False
        else:
            return self.stack[pos]



class Node:
    def __init__(self, value: Any, next: Optional['Node']=None) -> None:
        self.value: Any = value
        self.next: Optional['Node'] = next

class MyStack:
    def __init__(self, head: Optional['Node']=None) -> None:
        self.head: Optional['Node'] = None

    def is_empty(self) -> bool:
        '''
        whether a stack is empty
        '''
        if self.head == None:
            return True
        else:
            return False

    def push(self, value: Any, next: Optional['Node']=None) -> None:
        '''
        push an element to the top of a stack
        '''
        node = Node(value, next)
        node.next = self.head
        self.head = node

    def pop(self) -> Optional['Node']:
        '''
        pop an element from the top of a stack
        '''
        if self.is_empty():
            return False
        else:
            node = self.head
            self.head = self.head.next
            return node

    def get_top(self) -> Optional['Node']:
        '''
        return the element of the top of a stack
        '''
        if self.is_empty():
            return False
        else:
            return self.head

    def peek(self, pos: int) -> Optional['Node']:
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

    def print(self) -> bool:
        '''
        print all elements
        '''
        if self.is_empty():
            return False
        p = self.head
        while p != None:
            print(p)
            p = p.next
