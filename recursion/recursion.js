// several types of recursion
// tail recursion
/*
const tail = function (num) {
  if (num < 0) return;
  console.log(num);
  tail(num - 1);
}

tail(5);
*/

// head recursion
/*
const head = function (num) {
  if (num < 0) return;
  head(num - 1);
  console.log(num);
}

head(5);
*/

// tree recursion
/*
const treeR = function (num) {
  if (num < 0) return;
  treeR(num - 1);
  treeR(num - 1);
  console.log(num);
}

treeR(5);
*/

// indirect recursion
/*
const indirect_r = function (num) {
  if (num < 0) return;
  console.log(num);
  indirect_r_ano(num - 1);
}

const indirect_r_ano = function (num) {
  if (num < 0) return;
  console.log(num);
  indirect_r(num / 2);
}

indirect_r(3);
*/

// nested recursion
const nested_r = function (num) {
  if (num > 100) return num - 10;
  else {
    console.log(num);
    return nested_r(nested_r(num + 11));
  }
}

nested_r(95);

