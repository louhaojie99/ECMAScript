/**
 * Array.prototype.toReversed() 是 ECMAScript 2023 中引入的新数组方法，它提供了一种不可变的方式来反转数组元素顺序。
 * 与传统的 reverse() 方法不同，toReversed() 不会修改原始数组，而是返回一个反转后的新数组。
 */

const arr = [1, 2, 3];

// 1. reverse()（直接修改原数组）
const reversed1 = arr.reverse();
console.log(reversed1, arr); // [3, 2, 1] [3, 2, 1]（两者相同）

// 2. toReversed()（不修改原数组）
const reversed2 = arr.toReversed();
console.log(reversed2, arr); // [1, 2, 3] [3, 2, 1]（原数组不变）