const Search = require("./index");
//linearSearch test cases
test("test 1 ", () => {
  expect(new Search().linearSearch([1, 2, 3, 8, 4, 5, 6, 7], 0, 1)).toBe(0);
});

test("test 2 ", () => {
  expect(new Search().linearSearch([1, 2, 3, 8, 4, 5, 6, 7], 0, 7)).toBe(7);
});
test("test 3 ", () => {
  expect(new Search().linearSearch([1, 2, 3, 8, 4, 5, 6, 7], 0, 4)).toBe(4);
});
test("test 4 ", () => {
  expect(new Search().linearSearch([1, 2, 3, 8, 4, 5, 6, 7], 34, 4)).toBe(
    "number not found"
  );
});

//binarySearch test cases
test("test 5 ", () => {
  expect(new Search().binarySearch([1, 3, 4, 5, 6, 8, 9, 10], 0, 7, 1)).toBe(0);
});

test("test 6 ", () => {
  expect(new Search().binarySearch([1, 3, 4, 5, 6, 8, 9, 10], 0, 7, 10)).toBe(
    7
  );
});
test("test 7 ", () => {
  expect(new Search().binarySearch([1, 3, 4, 5, 6, 8, 9, 10], 0, 7, 6)).toBe(4);
});
test("test 8 ", () => {
  expect(new Search().binarySearch([1, 3, 4, 5, 6, 8, 9, 10], 0, 7, 0)).toBe(
    "number not found"
  );
});
