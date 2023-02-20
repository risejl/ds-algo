from typing import Any

class Node:
    def __init__(self, value: Any, next: 'Node'=None) -> None:
        self.value: Any = value
        self.next: 'Node' = next

class MyBag:
    '''
    implement linkedlist-based bag by python
    '''
    def __init__(self, head: 'Node'=None) -> None:
        self.head: 'Node' = None

    def is_empty(self) -> bool:
        '''
        check whether the bag is empty
        '''
        if self.head == None:
            return True
        else:
            return False

    def add(self, value: Any) -> None:
        '''
        add an element to the end
        '''
        node = Node(value)
        if self.is_empty():
            self.head = node
        else:
            p = self.head
            while p.next != None:
                p = p.next
            p.next = node

    def size(self) -> int:
        '''
        return bag size
        '''
        if self.is_empty():
            return 0
        else:
            p = self.head
            counter: int = 0
            while p != None:
                counter += 1
                p = p.next
            return counter

    def print(self) -> bool:
        '''
        print all elements
        '''
        if self.head == None:
            return False
        else:
            p = self.head 
            while p != None:
                print(p)
                p = p.next

    def print_r(self, p: 'Node'=None) -> None:
        '''
        print all elements recursively
        '''
        if p != None:
            print(p.value)
            self.print_r(p.next)

    def print_r_r(self, p: 'Node'=None) -> None:
        '''
        print all elements recursively and reversely
        '''
        if p != None:
            self.print_r_r(p.next)
            print(p.value)


class MyBag:
    '''
    implement array-based bag using python
    '''
    def __init__(self) -> None:
        self.list: list = []

    def is_empty(self) -> bool:
        if len(self.list) == 0:
            return True
        else:
            return False

    def size(self) -> int:
        return len(self.list)

    def add(self, value: Any) -> None:
        self.list.append(value)

    def print(self) -> None:
        if len(self.list) != 0:
            for i in self.list:
                print(i)