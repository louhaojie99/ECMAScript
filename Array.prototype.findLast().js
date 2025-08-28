/**
 * findLast()
 * 从数组末尾开始搜索：
 *
 * 使用场景：例如，查找最后一条日志、最近一次操作
 */

const numbers = [1, 2, 3, 2, 5];

// 1. 使用 find()（从前往后找）
const firstTwo = numbers.find((x) => x === 2);
console.log(firstTwo); // 2（第一个匹配的 2）

// 2. 使用 findLast()（从后往前找）
const lastTwo = numbers.findLast((x) => x === 2);
console.log(lastTwo); // 2（最后一个匹配的 2）

// 3. 如果没有匹配项，返回 undefined
const notFound = numbers.findLast((x) => x === 99);
console.log(notFound); // undefined
