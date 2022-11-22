class MyBag:
    '''
    implement bag data structure using python
    '''
    def __init__(self):
        self.list = []

    def isEmpty(self):
        if len(self.list) == 0:
            return True
        else:
            return False

    def size(self):
        return len(self.list)

    def add(self,value):
        self.list.append(value)

    def print(self):
        for i in self.list:
            print(i)

bag = MyBag()
print(bag.isEmpty())
bag.add(1)
print(bag.isEmpty())
bag.add(2)
print(bag.size())
bag.print()
