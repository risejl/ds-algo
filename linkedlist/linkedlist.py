class Node:
    '''
    implement linkedList node
    '''
    def __init__(self, value, next):
        self.value = value
        self.next = next

class MyLinkedList:
    '''
    implement linkedList
    '''
    def __init__(self, head = None):
        self.head = None

    def createNodeByHead(self, value, next):
        node = Node(value, next)
        node.next = self.head
        self.head = node

    def createNodeByTail(self, value, next):
        node = Node(value, next)
        p = self.head
        while p.next != None:
            p = p.next
        p.next = node

    def print(self):
        p = self.head
        while p != None:
            print(p)
            p = p.next

    def count(self):
        p = self.head
        counter = 0
        while p != None:
            counter += 1
            p = p.next
        return counter

    def add(self):
        p = self.head
        summa = 0
        while p != None:
            summa += p.value
            p = p.next
        return summa

    def getMax(self):
        p = self.head
        maxValue = p.value
        while p != None:
            if maxValue < p.value:
                maxValue = p.value
            p = p.next
        return maxValue

    def getMin(self):
        p = self.head
        minValue = p.value
        while p != None:
            if minValue > p.value:
                minValue = p.value
            p = p.next
        return minValue

    def search(self, value):
        p = self.head
        index = 0
        while p != None:
            if p.value != value:
                p = p.next
                index += 1
            else:
                return index

    def deleteNode(self,index):
        p = self.head
        counter = 0
        while p != None:
            if counter < (index-1):
                p = p.next
                counter += 1
            if counter == (index-1):
                p.next = p.next.next
                return

# test code
linkedList = MyLinkedList();
linkedList.createNodeByHead(1,None);
linkedList.createNodeByTail(2,None);
print("after add 1 and 2, the linkedlist:");
linkedList.print();
print("how many elements are there:");
print(linkedList.count());
print("total element value:");
print(linkedList.add());
print("maximum element:");
print(linkedList.getMax());
print("minimum element:");
print(linkedList.getMin());
print("the 2 element's index:");
print(linkedList.search(2));
print("delete the first element:");
linkedList.deleteNode(1);
print(linkedList.head);
