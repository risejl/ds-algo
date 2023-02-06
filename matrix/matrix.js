// implement matrix by ES6 class syntax
class MyMatrix {
  constructor(row) {
    this.matrix = [];
    for (let i = 0; i < row; i += 1) {
      this.matrix.push([]);
    }
  }
  
  // add an element to a given row
  add(row, value) {
    if (row > this.matrix.length) {
      console.log('row number is larger than matrix row length');
      return false;
    } else {
      this.matrix[row].push(value);
    }
  }
  
  // modify to a matrix
  modify() {
    let maxRowLength = 0;
    for (let i = 0; i < this.matrix.length; i += 1) {
      if (maxRowLength < this.matrix[i].length) {
        maxRowLength = this.matrix[i].length;
      }
    }
    for (let i = 0; i < this.matrix.length; i += 1) {
      for (let j = 0; j < maxRowLength - this.matrix[i].length; j += 1) {
        this.matrix[i].push(0);
      }
    }
  }

  // matrix's shape
  shape() {
    const row = this.matrix.length;
    const column = this.matrix[0].length;
    return { row, column };
  }

  // print all elements
  print() {
    this.matrix.map((item) => {
      item.map((element) => {
        console.log(element);
      });
    });
  }

  // print elements by row
  printByRow() {
    for (let i = 0; i < this.matrix.length; i += 1) {
      console.log(`${i} row:'`);
      for (let j = 0; j < this.matrix[i].length; j += 1) {
        console.log(this.matrix[i][j]);
      }
    }
  }

  // print elements by column
  printByColumn() {
    for (let i = 0; i < this.matrix[0].length; i += 1) {
      console.log(`${i} column:`);
      for (let j = 0; j < this.matrix.length; j += 1) {
        console.log(this.matrix[j][i]);
      }
    }
  }

  // transpose a matrix
  transpose() {
    const { newColNum, newRowNum } = this.shape();
    let newRow = [];
    for (let i = 0; i < this.matrix[0].length; i += 1) {
      let eachRow = [];
      for (let j = 0; j < this.matrix.length; j += 1) {
        eachRow.push(this.matrix[j][i]);
      }
      newRow.push(eachRow);
    } 
    for (let i = 0; i < newRow.length; i += 1) {
      this.matrix.push(newRow[i]);
    }
    for (let i = 0; i < newColNum; i += 1) {
      this.matrix.shift();
    }
  }
}

