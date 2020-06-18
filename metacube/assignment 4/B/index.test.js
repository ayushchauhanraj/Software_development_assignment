const sparse = require("./index");
let arr = [
  [0, 0, 0, 0],
  [0, 0, 10, 12],
  [0, 1, 0, 2],
];
let arr2 = [
  [0, 0, 0],
  [0, 2, 5],
  [0, 0, 1],
  [0, 8, 0],
];

const obj = new sparse(arr);
const obj2 = new sparse(arr2);

test("Multiply1", () => {
  expect(obj.multiply(obj2)).toStrictEqual([
    { r: 1, c: 1, val: 96 },
    { r: 1, c: 2, val: 10 },
    { r: 2, c: 1, val: 18 },
    { r: 2, c: 2, val: 5 },
  ]);
});

test("Add1", () => {
  expect(obj.add(obj2)).toBe("cannot Add");
});

test("tranpose1", () => {
  expect(obj.transpose()).toStrictEqual([
    { r: 1, c: 2, val: 1 },
    { r: 2, c: 1, val: 10 },
    { r: 3, c: 1, val: 12 },
    { r: 3, c: 2, val: 2 },
  ]);
});

test("isSymmetric 1", () => {
  expect(obj.isSymmetric()).toBe(false);
});

let arr3 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
const obj3 = new sparse(arr3);
const obj4 = new sparse(arr3);
test("isSymmetric 2", () => {
  expect(obj3.isSymmetric()).toBe(true);
});

test("Multiply 2", () => {
  expect(obj.multiply(obj3)).toBe("cannot multiply");
});

test("Addition 2", () => {
  expect(obj3.add(obj4)).toStrictEqual([
    { r: 0, c: 0, val: 2 },
    { r: 1, c: 1, val: 2 },
    { r: 2, c: 2, val: 2 },
  ]);
});
