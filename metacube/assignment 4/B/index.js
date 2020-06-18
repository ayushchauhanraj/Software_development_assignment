class sparse {
  constructor(arr) {
    this.row = arr.length;
    this.col = arr[0].length;
    this.sparseArr = this.sparseConvert(arr);
    Object.seal(this);
  }

  sparseConvert(arr) {
    let sparseArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] != 0) {
          let obj = { r: i, c: j, val: arr[i][j] };
          sparseArr.push(obj);
        }
      }
    }
    return sparseArr;
  }

  showMatrix(row, col, reduceMatrix) {
    let orignalMatix = [];
    let index = 0;

    for (let i = 0; i < row; i++) {
      let rowArr = [];
      for (let j = 0; j < col; j++) {
        if (
          index < reduceMatrix.length &&
          reduceMatrix[index].r == i &&
          reduceMatrix[index].c == j
        ) {
          rowArr.push(reduceMatrix[index].val);
          index++;
        } else {
          rowArr.push(0);
        }
      }

      orignalMatix.push(rowArr);
    }
    return orignalMatix;
  }

  transpose() {
    0;
    let tranposeArr = [];
    this.sparseArr.forEach((ele, i) => {
      tranposeArr[i] = { r: ele.c, c: ele.r, val: ele.val };
    });
    tranposeArr.sort(function (a, b) {
      return a.r - b.r;
    });
    return tranposeArr;
  }

  isSymmetric() {
    if (this.row != this.col) {
      return false;
    }
    let matrix = this.transpose();
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].val != this.sparseArr[i].val) {
        return false;
      }
    }
    return true;
  }

  add(arrObj) {
    let row = arrObj.row;
    let col = arrObj.col;
    if (col != this.col || row != this.row) {
      return "cannot Add";
    }
    let addArr = arrObj.sparseArr,
      newArr = [],
      pos1 = 0,
      pos2 = 0;

    while (pos1 < this.sparseArr.length && pos2 < addArr.length) {
      if (this.sparseArr[pos1].r < addArr[pos2].r) {
        newArr.push(this.sparseArr[pos1]);
        pos1++;
      } else {
        if (this.sparseArr[pos1].r > addArr[pos2].r) {
          newArr.push(addArr[pos2]);
          pos2++;
        } else {
          if (this.sparseArr[pos1].c < addArr[pos2].c) {
            newArr.push(this.sparseArr[pos1]);
            pos1++;
          } else {
            if (this.sparseArr[pos1].c > addArr[pos2].c) {
              newArr.push(addArr[pos2]);
              pos2++;
            } else {
              newArr.push({
                r: addArr[pos2].r,
                c: addArr[pos2].c,
                val: addArr[pos2].val + this.sparseArr[pos1].val,
              });
              ++pos1;
              ++pos2;
            }
          }
        }
      }
    }
    while (pos1 < this.sparseArr.length) {
      newArr.push(this.sparseArr[pos1++]);
    }
    while (pos2 < addArr.length) {
      newArr.push(addArr[pos2++]);
    }
    return newArr;
  }

  multiply(sparseObj) {
    if (this.col != sparseObj.row) {
      return "cannot multiply";
    }

    let mulArr = sparseObj.transpose();
    let result = [];
    let pos1 = 0,
      pos2 = 0;

    for (pos1 = 0; pos1 < this.sparseArr.length; ) {
      let rowIndex = this.sparseArr[pos1].r;

      for (pos2 = 0; pos2 < mulArr.length; ) {
        let colIndex = mulArr[pos2].r;

        let temp1 = pos1;
        let temp2 = pos2;
        let sum = 0;

        while (
          temp1 < this.sparseArr.length &&
          this.sparseArr[temp1].r == rowIndex &&
          temp2 < mulArr.length &&
          mulArr[temp2].r == colIndex
        ) {
          if (this.sparseArr[temp1].c < mulArr[temp2].c) {
            temp1++;
          } else {
            if (this.sparseArr[temp1].c > mulArr[temp2].c) {
              temp2++;
            } else {
              sum += this.sparseArr[temp1++].val * mulArr[temp2++].val;
            }
          }
        }

        if (sum != 0) result.push({ r: rowIndex, c: colIndex, val: sum });

        while (pos2 < mulArr.length && mulArr[pos2].r == colIndex) pos2++;
      }

      while (pos1 < this.sparseArr.length && this.sparseArr[pos1].r == rowIndex)
        pos1++;
    }
    return result;
  }
}
module.exports = sparse;

/*

Time Complexity
---------------
n-number of non-zero elements.
Add: O(n)
Tranpose : O(nlog(n)) ,sorting complexity 
isSymmetric: O(n)
multiply: O(x*n + y*m), where (x, m) is number of columns and terms in the second matrix; and (y, n) is number of rows and terms in the first matrix.


*/
