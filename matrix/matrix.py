class MyMatrix:
    '''
    implement matrix using python
    '''

    def __init__(self, row):
        self.matrix = list()
        for i in range(row):
            self.matrix.append([])

    def add(self, row, value):
        if row > len(self.matrix):
            print("row number is larger than matrix row length")
            return False
        else:
            self.matrix[row].append(value)

    def modify(self):
        maxRowLength = 0
        for i in range(len(self.matrix)):
            if maxRowLength < len(self.matrix[i]):
                maxRowLength = len(self.matrix[i])
        for i in range(len(self.matrix)):
            for j in range(maxRowLength - len(self.matrix[i])):
                self.matrix[i].append(0);

    def shape(self):
        row = len(self.matrix)
        column = len(self.matrix[0])
        return [row, column]
    
    def print(self):
        for i in range(len(self.matrix)):
            for j in range(len(self.matrix[i])):
                print(self.matrix[i][j])
    
    def printByRow(self):
        for i in range(len(self.matrix)):
            print("$i row:")
            for j in range(len(self.matrix[i])):
                print(self.matrix[i][j])

    def printByColumn(self):
        for i in range(len(self.matrix[0])):
            print("$i column:")
            for j in range(len(self.matrix)):
                print(self.matrix[j][i])

    def transpose(self):
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

# test code
matrix = MyMatrix(2)
print("initialize the matrix:")
print(matrix.matrix)
print("add some element:")
matrix.add(0,1)
matrix.add(0,2)
matrix.add(1,3)
matrix.add(1,4)
matrix.add(1,5)
print(matrix.matrix)
print("modify to matrix:")
matrix.modify()
matrix.print()
print("matrix shape:")
print(matrix.shape())
print("print by row:")
matrix.printByRow();
print("print by column:")
matrix.printByColumn()
print("transpose matrix:")
matrix.transpose();
print(matrix.matrix)