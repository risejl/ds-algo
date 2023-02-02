class MyMatrix:
    '''
    implement matrix by python
    '''

    def __init__(self, row):
        self.matrix = list()
        for i in range(row):
            self.matrix.append([])

    def add(self, row, value):
        '''
        add an element to a given row
        '''
        if row > len(self.matrix):
            print("row number is larger than matrix row length")
            return False
        else:
            self.matrix[row].append(value)

    def modify(self):
        '''
        modify to a matrix
        '''
        maxRowLength = 0
        for i in range(len(self.matrix)):
            if maxRowLength < len(self.matrix[i]):
                maxRowLength = len(self.matrix[i])
        for i in range(len(self.matrix)):
            for j in range(maxRowLength - len(self.matrix[i])):
                self.matrix[i].append(0);

    def shape(self):
        '''
        matrix's shape
        '''
        row = len(self.matrix)
        column = len(self.matrix[0])
        return [row, column]
    
    def print(self):
        '''
        print all elements
        '''
        for i in range(len(self.matrix)):
            for j in range(len(self.matrix[i])):
                print(self.matrix[i][j])
    
    def print_by_row(self):
        '''
        print elements by row
        '''
        for i in range(len(self.matrix)):
            print("$i row:")
            for j in range(len(self.matrix[i])):
                print(self.matrix[i][j])

    def print_by_column(self):
        '''
        print elements by column
        '''
        for i in range(len(self.matrix[0])):
            print("$i column:")
            for j in range(len(self.matrix)):
                print(self.matrix[j][i])

    def transpose(self):
        '''
        transpose a matrix
        '''
        newColNum = self.shape()[0]
        newRowNum = self.shape()[1]
        newRow = list()
        for i in range(len(self.matrix[0])):
            eachRow = list()
            for j in range(len(self.matrix)):
                eachRow.append(self.matrix[j][i])
            newRow.append(eachRow)
        for i in range(len(newRow)):
            self.matrix.append(newRow[i])
        for i in range(newColNum):
            self.matrix.pop(0)