class ArrOperation {
  mirror(arr) {
    try {
      if (!arr.length) {
        throw new Error("Length must not be zero");
      }
    } catch (error) {
      console.log(error);
      return error;
    }
    let max = 1;
    for (let i = 0; i < arr.length - 1; i++) {
      let p = arr.length - 1;
      let flag = 0;
      let j;
      let count = 0; //arr[1, 2, 1, 4]
      for (let k = i; k < arr.length; k++) {
        if (flag == 0) {
          for (j = p; j > i; j--) {
            if (arr[i] == arr[j]) {
              flag = 1;
              break;
            }
          }
        }
        if (arr[k] == arr[j] && j >= 0) {
          count++;
          j--;
        } else {
          if (count > max) {
            max = count;
          }
          j--;
          p = j;
          if (j < k) {
            break;
          }
          flag = 0;
          k = i;
        }
      }
      if (count > max) {
        max = count;
      }
    }
    console.log(max);
  }
  clumps(arr) {
    try {
      if (!arr.length) {
        throw new Error("arr length is zero");
      }
    } catch (error) {
      console.log(error);
      return;
    }
    let count = 0;
    let flag = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) {
        if (flag == 1) {
          flag = 0;
          count++;
        }
      } else {
        flag = 1;
      }
    }
    console.log(count);
  }
}

let new ArrOperation().clumps([7, 1, 9, 1, 1, 1, 1]);
