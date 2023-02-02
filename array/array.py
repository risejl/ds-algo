class MyArray:
    '''
    implement array using python
    '''
    def __init__(self):
        self.arr = list()

    def is_empty(self):
        if len(self.arr) == 0:
            return True
        else:
            return False

    def print(self):
        '''
        print all elements
        '''
        for i in self.arr:
            print(i)

    def add(self, value):
        '''
        add an element to the end
        '''
        return self.arr.append(value)

    def insert(self, value, pos):
        '''
        insert an element of a given position
        '''
        return self.arr.insert(pos, value)

    def remove(self, pos):
        '''
        remove an element of a given position
        '''
        return self.arr.pop(pos)

    def search(self, value):
        '''
        check whether an element is in the array
        '''
        pos = self.arr.index(value)
        if pos == -1:
            print("this element is not in the array")
            return False
        else:
            return pos

    def get(self, pos):
        '''
        return an element of a given position
        '''
        if pos >= len(self.arr):
            print("index out of range")
            return False
        else:
            return self.arr[pos]

    def get_max(self):
        '''
        return the maximum element of array
        '''
        return max(self.arr)

    def get_min(self):
        '''
        return the minimum element of array
        '''
        return min(self.arr)

    def reverse(self):
        '''
        reverse all array elements
        '''
        return self.arr.reverse()

    def shift(self, pos, direction):
        '''
        move array elements together by left or right
        '''
        if direction == "left":
            self.arr[0:pos] = self.arr[pos:len(self.arr)]
        if direction == "right":
            self.arr[pos:len(self.arr)] = self.arr[0:pos]

