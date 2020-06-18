class intSet {
  constructor(arr) {
    this.arrSet = arr;
    Object.seal(this);
  }
  isMember(x) {
    let val = this.arrSet.filter((ele) => ele == x);
    if (val) return true;

    return false;
  }

  size() {
    return this.arrSet.length;
  }
  isSubSet(s) {
    let flag = 0;
    for (let i = 0; i <= this.arrSet.length - s.length; i++) {
      let p = i;
      flag = 0;
      for (let j = 0; j < s.length; j++, p++) {
        if (s[j] != this.arrSet[p]) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        return true;
      }
    }
    return false;
  }
  getComplement() {
    let complementArr = [];
    let i = 1,
      j = 0;

    let newArr = this.arrSet.filter((ele) => ele);
    console.log(this.arrSet);
    newArr.sort(function (a, b) {
      return a - b;
    });

    while (i < 1000) {
      if (this.arrSet[j] == i) {
        j++;
        i++;
        continue;
      }
      complementArr.push(i);
      i++;
    }
    return complementArr;
  }
  union(s1, s2) {
    let unionSet = [];
    for (let i = 0; i < s1.length; i++) {
      unionSet.push(s1[i]);
    }
    for (let i = 0; i < s2.length; i++) {
      unionSet.push(s2[i]);
    }
    return unionSet;
  }
}

let arr = [1, 4, 6, 7, 8, 34, 556, 90, 14, 25, 78, 90, 255];
let obj = new intSet(arr);
console.log(obj.size());
console.log(obj.getComplement());
console.log(obj.isMember(8));
let arr1 = [8, 34, 556, 90];
let s1 = new intSet(arr1).arrSet;
let arr2 = [13, 35, 57, 68, 8, 23, 255, 266];
let s2 = new intSet(arr2).arrSet;
console.log(obj.union(s1, s2));
console.log(obj.isSubSet(s1));
