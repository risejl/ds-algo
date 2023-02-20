from typing import Any, Optional

class MyArray:
    '''
    implement array using python
    '''
    def __init__(self) -> None: 
        self.arr = list()

    def is_empty(self) -> bool: 
        if len(self.arr) == 0:
            return True
        else:
            return False

    def print(self) -> None: 
        '''
        print all elements
        '''
        for i in self.arr:
            print(i)

    def add(self, value: Any) -> list: 
        '''
        add an element to the end
        '''
        return self.arr.append(value)

    def insert(self, value: Any, pos: int) -> list: 
        '''
        insert an element of a given position
        '''
        return self.arr.insert(pos, value)

    def remove(self, pos: int) -> Any:
        '''
        remove an element of a given position
        '''
        return self.arr.pop(pos)

    def search(self, value: Any) -> Optional[int]: 
        '''
        check whether an element is in the array
        '''
        pos: int = self.arr.index(value)
        if pos == -1:
            print("this element is not in the array")
        else:
            return pos

    def get(self, pos: int) -> Any: 
        '''
        return an element of a given position
        '''
        if pos >= len(self.arr):
            print("index out of range")
        else:
            return self.arr[pos]

    def get_max(self) -> Any: 
        '''
        return the maximum element of array
        '''
        return max(self.arr)

    def get_min(self) -> Any:
        '''
        return the minimum element of array
        '''
        return min(self.arr)

    def reverse(self) -> list: 
        '''
        reverse all array elements
        '''
        return self.arr.reverse()

    def shift(self, step: int, direction: str) -> None: 
        '''
        shift array elements left or right
        '''
        if direction == "left":
            self.arr[0:len(self.arr)] = self.arr[step:len(self.arr)]
            for i in range(step):
                self.arr.append(0)
        if direction == "right":
            self.arr[0:len(self.arr)] = self.arr[0:len(self.arr)-step]
            for i in range(step):
                self.arr.insert(0, 0)

    def rotate(self, step: int, direction: str) -> None: 
        '''
        rotate array elements left or right
        '''
        if direction == "left":
            for i in range(step):
                self.arr.append(self.arr.pop(0))

        if direction == "right":
            for i in range(step):
                self.arr.insert(0, self.arr.pop(len(self.arr)-1))