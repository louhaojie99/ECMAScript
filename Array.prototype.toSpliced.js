/**
 * 不可变版本的 splice()，可以删除/替换/添加元素：
 */
const arr = [1, 2, 3, 4];

// 1. 传统 splice()（直接修改原数组）
const arr1 = [...arr]; // 先复制一份
const deleted = arr1.splice(1, 2, "a", "b");
console.log(arr, arr1, deleted);
// 原数组 [1, 2, 3, 4] 不变（因为复制了）
// 新数组 [1, "a", "b", 4]
// 被删除的元素 [2, 3]

// 2. 使用 toSpliced()（不修改原数组，直接返回新数组）
const arr2 = arr.toSpliced(1, 2, "a", "b");
console.log(arr, arr2);
// 原数组 [1, 2, 3, 4] 不变
// 新数组 [1, "a", "b", 4]
