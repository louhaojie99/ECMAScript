// 作用：从数组末尾开始向前查找，返回第一个满足条件的元素的索引。若未找到则返回 -1。
const arr = [1, 2, 3, 2, 1];

// findIndex：从前往后找第一个等于 2 的元素
const firstIndex = arr.findIndex((x) => x === 2);
console.log(firstIndex); // 1

// findLastIndex：从后往前找第一个等于 2 的元素
const lastIndex = arr.findLastIndex((x) => x === 2);
console.log(lastIndex); // 3
