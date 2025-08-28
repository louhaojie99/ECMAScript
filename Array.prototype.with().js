/**
 * 不可变方式替换指定索引的元素：
 */
const arr = [1, 2, 3];

// 1. 传统方法：直接赋值（修改原数组）
const arr1 = [...arr]; // 先复制一份
arr1[1] = "x";
console.log(arr, arr1); // 原数组 [1, 2, 3] 不变，新数组 [1, "x", 3]

// 2. 使用 map()（不修改原数组，但效率较低）
const arr2 = arr.map((item, index) => (index === 1 ? "x" : item));
console.log(arr, arr2); // 原数组 [1, 2, 3] 不变，新数组 [1, "x", 3]

// 3. 使用 slice() + 展开运算符（不修改原数组，但代码冗长）
const arr3 = [...arr.slice(0, 1), "x", ...arr.slice(2)];
console.log(arr, arr3); // 原数组 [1, 2, 3] 不变，新数组 [1, "x", 3]

// 4. 使用 with()（最佳方式：不修改原数组，代码简洁）
const arr4 = arr.with(1, "x");
console.log(arr, arr4); // 原数组 [1, 2, 3] 不变，新数组 [1, "x", 3]
