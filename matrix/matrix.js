// implement matrix using ES6 class syntax
/*
class MyMatrix {
  constructor(row) {
    this.matrix = [];
    for (let i = 0; i < row; i++) {
      this.matrix.push([]);
    }
  }
  
  add(row, value) {
    if (row > this.matrix.length) {
      console.log("row number is larger than matrix row length");
      return false;
    } else {
      this.matrix[row].push(value);
    }
  }
  
  modify() {
    let maxRowLength = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      if (maxRowLength < this.matrix[i].length) {
        maxRowLength = this.matrix[i].length;
      }
    }
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < maxRowLength - this.matrix[i].length; j++) {
        this.matrix[i].push(0);
      }
    }
  }

  shape() {
    const row = this.matrix.length;
    const column = this.matrix[0].length;
    return [row, column];
  }

  print() {
    this.matrix.map((item) => {
      item.map((element) => {
        console.log(element);
      });
    });
  }

  printByRow() {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(`${i} row:"`);
      for (let j = 0; j < this.matrix[i].length; j++) {
        console.log(this.matrix[i][j]);
      }
    }
  }

  printByColumn() {
    for (let i = 0; i < this.matrix[0].length; i++) {
      console.log(`${i} column:`);
      for (let j = 0; j < this.matrix.length; j++) {
        console.log(this.matrix[j][i]);
      }
    }
  }

  transpose() {
    const [newColNum, newRowNum] = this.shape();
    let newRow = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
      let eachRow = [];
      for (let j = 0; j < this.matrix.length; j++) {
        eachRow.push(this.matrix[j][i]);
      }
      newRow.push(eachRow);
    } 
    for (let i = 0; i < newRow.length; i++) {
      this.matrix.push(newRow[i]);
    }
    for (let i = 0; i < newColNum; i++) {
      this.matrix.shift();
    }
  }
}
*/

// implement matrix using vanilla js
function MyMatrix(row) {
  this.matrix = [];
  for (let i = 0; i < row; i++) {
      this.matrix.push([]);
  }

  this.add = function(row, value) {
    if (row > this.matrix.length) {
      console.log("row number is larger than matrix row length");
      return false;
    } else {
      this.matrix[row].push(value);
    }
  }
  
  this.modify = function() {
    let maxRowLength = 0;
    for (let i = 0; i < this.matrix.length; i++) {
      if (maxRowLength < this.matrix[i].length) {
        maxRowLength = this.matrix[i].length;
      }
    }
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < maxRowLength - this.matrix[i].length; j++) {
        this.matrix[i].push(0);
      }
    }
  }

  this.shape = function() {
    const row = this.matrix.length;
    const column = this.matrix[0].length;
    return [row, column];
  }

  this.print = function() {
    this.matrix.map((item) => {
      item.map((element) => {
        console.log(element);
      });
    });
  }

  this.printByRow = function() {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(`${i} row:"`);
      for (let j = 0; j < this.matrix[i].length; j++) {
        console.log(this.matrix[i][j]);
      }
    }
  }

  this.printByColumn = function() {
    for (let i = 0; i < this.matrix[0].length; i++) {
      console.log(`${i} column:`);
      for (let j = 0; j < this.matrix.length; j++) {
        console.log(this.matrix[j][i]);
      }
    }
  }

  this.transpose = function() {
    const [newColNum, newRowNum] = this.shape();
    let newRow = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
      let eachRow = [];
      for (let j = 0; j < this.matrix.length; j++) {
        eachRow.push(this.matrix[j][i]);
      }
      newRow.push(eachRow);
    } 
    for (let i = 0; i < newRow.length; i++) {
      this.matrix.push(newRow[i]);
    }
    for (let i = 0; i < newColNum; i++) {
      this.matrix.shift();
    }
  }
}

// test code
let matrix = new MyMatrix(2);
console.log("initialize the matrix:");
console.log(matrix);
console.log("add some element:");
matrix.add(0,1);
matrix.add(0,2);
matrix.add(1,3);
matrix.add(1,4);
matrix.add(1,5);
console.log(matrix);
console.log("modify to matrix:");
matrix.modify();
matrix.print();
console.log("matrix shape:");
console.log(matrix.shape());
console.log("print by row:");
matrix.printByRow();
console.log("print by column:");
matrix.printByColumn();
console.log("transpose matrix:");
matrix.transpose();
console.log(matrix);
