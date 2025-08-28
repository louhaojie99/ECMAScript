/**
 * ECMAScript 2023 引入了新的数组方法 toSorted()，它提供了一种不可变的方式来对数组进行排序。
 */
const arr = [3, 1, 4, 1, 5];

// 1. 传统 sort()（直接修改原数组）
const arr1 = [...arr]; // 先复制一份
arr1.sort((a, b) => a - b);
console.log(arr, arr1);
// 原数组 [3, 1, 4, 1, 5] 不变（因为复制了）
// 新数组 [1, 1, 3, 4, 5]

// 2. 使用 toSorted()（不修改原数组，直接返回新数组）
const arr2 = arr.toSorted((a, b) => a - b);
console.log(arr, arr2);
// 原数组 [3, 1, 4, 1, 5] 不变
// 新数组 [1, 1, 3, 4, 5]
