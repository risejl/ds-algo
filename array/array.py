class MyArray:
    '''
    implement array using python
    '''
    def __init__(self):
        self.arr = list()

    def print(self):
        for i in self.arr:
            print(i)

    def add(self, value):
        return self.arr.append(value)

    def insert(self, value, pos):
        return self.arr.insert(pos, value)

    def remove(self, pos):
        return self.arr.pop(pos)

    def search(self, value):
        pos = self.arr.index(value)
        if pos == -1:
            print("this element is not in the array")
            return False
        else:
            return pos

    def get(self, pos):
        if pos >= len(self.arr):
            print("index out of range")
            return False
        else:
            return self.arr[pos]

    def get_max(self):
        return max(self.arr)

    def get_min(self):
        return min(self.arr)

    def reverse(self):
        return self.arr.reverse()

    def shift(self, pos, direction):
        if direction == "left":
            self.arr[0:pos] = self.arr[pos:len(self.arr)]
        if direction == "right":
            self.arr[pos:len(self.arr)] = self.arr[0:pos]

# test code
arr = MyArray()
arr.add(1)
arr.add(2)
arr.add(3)
print("after add 1,2 and 3:")
arr.print()
arr.insert(1,2)
print("insert 1 at the second position:")
arr.print()
arr.remove(0)
print("remove the first element:")
arr.print();
print("find element 2:1")
print(arr.search(2))
print("get the second element:")
print(arr.get(1))
print("get the maximum element of the array:")
print(arr.get_max())
print("get the minimum element of the array:")
print(arr.get_min())
arr.reverse()
print("reverse the array:")
arr.print()
print("array shift 1 element toward right:")
arr.shift(1, "right")
arr.print();

