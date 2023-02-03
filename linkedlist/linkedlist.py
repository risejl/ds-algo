class Node:
    '''
    implement linkedList node
    '''
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class MyLinkedList:
    '''
    implement linkedList
    '''
    def __init__(self, head=None):
        self.head = None

    def create_list_by_array(self, array):
        '''
        create a linkedlist by array elements
        '''
        if len(array) == 0:
            return self.head

        head_node = Node(array[0])
        self.head = head_node
        p = self.head
        for i in range(1, len(array)):
            node = Node(array[i])
            p.next = node
            p = p.next 
        return self.head

    def create_node_by_head(self, value, next=None):
        '''
        insert a node to the head of linkedlist
        '''
        node = Node(value, next)
        node.next = self.head
        self.head = node

    def create_node_by_tail(self, value, next=None):
        '''
        insert a node to the end of linkedlist
        '''
        node = Node(value, next)
        p = self.head
        while p.next != None:
            p = p.next
        p.next = node

    def print(self):
        '''
        print all nodes
        '''
        p = self.head
        while p != None:
            print(p)
            p = p.next

    def print_r(self, p=None):
        if p != None:
            print(p)
            self.print_r(p.next)

    def print_r_r(self, p=None):
        if p != None:
            self.print_r_r(p.next)
            print(p)

    def count(self):
        '''
        return the number of nodes
        '''
        p = self.head
        counter = 0
        while p != None:
            counter += 1
            p = p.next
        return counter

    def add(self):
        '''
        return the summation of all nodes
        '''
        p = self.head
        summa = 0
        while p != None:
            summa += p.value
            p = p.next
        return summa

    def get_max(self):
        '''
        return the maximum value of nodes
        '''
        p = self.head
        maxValue = p.value
        while p != None:
            if maxValue < p.value:
                maxValue = p.value
            p = p.next
        return maxValue

    def get_min(self):
        '''
        return the minimum value of nodes
        '''
        p = self.head
        minValue = p.value
        while p != None:
            if minValue > p.value:
                minValue = p.value
            p = p.next
        return minValue

    def search(self, value):
        '''
        check whether a node is in the linkedlist
        '''
        p = self.head
        index = 0
        while p != None:
            if p.value != value:
                p = p.next
                index += 1
            else:
                return index

    def delete_node(self,index):
        '''
        delete a node at a given index
        '''
        p = self.head
        counter = 0
        while p != None:
            if counter < (index-1):
                p = p.next
                counter += 1
            if counter == (index-1):
                p.next = p.next.next
                return

    def remove_duplicate(self):
        '''
        remove duplicate nodes
        '''
        pre = self.head
        p = pre.next 
        while p != None:
            if p.value == pre.value:
                p = p.next
                pre.next = p
            else:
                p = p.next
                pre = pre.next

    def is_loop(self):
        '''
        is linkedlist have a loop
        '''
        if self.head == None:
            return False
        if self.head.next == self.head:
            return True
        if self.head.next == None:
            return False
        fast = self.head
        slow = self.head 
        while True:
            if fast == None or fast.next == None:
                return False
            fast = fast.next.next 
            slow = slow.next
            if fast == slow:
                return True

    def reverse(self):
        '''
        reverse a linkedlist
        '''
        q = self.head
        p = q.next 
        r = p.next
        while r.next != None:
            if q == self.head:
                q.next = None
            p.next = q 
            q = p 
            p = r  
            r = r.next 
            
        r.next = p 
        p.next = q  
        self.head = r

    def reverse_r(self, p=None, q=None):
        '''
        reverse a linkedlist recursively
        '''
        if p != None:
            self.reverse_r(p.next, q.next)
            p.next = q 
        else:
            self.head = q 
        q.next = None
