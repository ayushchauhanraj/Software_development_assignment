class Search {
  binarySearch(arr, lef, right, nu) {
    let mid = parseInt((lef + right) / 2);

    if (lef > right) {
      return "number not found";
    }
    if (arr[mid] == nu) {
      return mid;
    }
    if (arr[mid] < nu) {
      return this.binarySearch(arr, (lef = mid + 1), right, nu);
    }
    if (arr[mid] > nu) {
      return this.binarySearch(arr, lef, (right = mid - 1), nu);
    }
  }

  //    require: arr not null ,initial index and a number to be find out .
  //    effect : recurse over the array and return the first index of arr
  linearSearch(arr, i, nu) {
    if (i > arr.length) {
      return "number not found";
    }
    if (arr[i] == nu) {
      return i;
    }

    return this.linearSearch(arr, ++i, nu);
  }
}
module.exports = Search;
