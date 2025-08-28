/**
 * Array.prototype.toReversed() 是 ECMAScript 2023 中引入的新数组方法，它提供了一种不可变的方式来反转数组元素顺序。
 * 与传统的 reverse() 方法不同，toReversed() 不会修改原始数组，而是返回一个反转后的新数组。
 */

const arr = [1, 2, 3, 4, 5];
const reversedArr = arr.reverse();

console.log("reverse():", {
  originalArray: arr, // [5, 4, 3, 2, 1] - 原数组被修改
  reversedArray: reversedArr, // [5, 4, 3, 2, 1] - 与原数组相同
});

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.toReversed();

console.log("toReversed():", {
  originalArray, // [1, 2, 3, 4, 5] - 原数组保持不变
  reversedArray, // [5, 4, 3, 2, 1] - 新数组，元素顺序反转
});
