class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class MyBag:
    '''
    implement linkedlist-based bag by python
    '''
    def __init__(self, head=None):
        self.head = None

    def is_empty(self):
        '''
        check whether the bag is empty
        '''
        if self.head == None:
            return True
        else:
            return False

    def add(self, value):
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

    def size(self):
        '''
        return bag size
        '''
        if self.is_empty():
            return 0
        else:
            p = self.head
            counter = 0
            while p != None:
                counter += 1
                p = p.next
            return counter

    def print(self):
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

    def print_r(self, p=None):
        '''
        print all elements recursively
        '''
        if p != None:
            print(p.value)
            self.print_r(p.next)

    def print_r_r(self, p=None):
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
    def __init__(self):
        self.list = []

    def is_empty(self):
        if len(self.list) == 0:
            return True
        else:
            return False

    def size(self):
        return len(self.list)

    def add(self,value):
        self.list.append(value)

    def print(self):
        if len(self.list) != 0:
            for i in self.list:
                print(i)