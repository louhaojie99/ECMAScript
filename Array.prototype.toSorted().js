/**
 * ECMAScript 2023 引入了新的数组方法 toSorted()，它提供了一种不可变的方式来对数组进行排序。
 */

const arr = [3, 1, 2];
const sortedArr = arr.sort((a, b) => a - b);

// 旧版本的数组 sort 方法排序过后返回一个新数组（也会影响原数组顺序）
console.log("sort: ", {
  arr,
  sortedArr,
});

const newArr = [3, 1, 2];
const sortedNewArr = newArr.toSorted((a, b) => a - b);

// 新版本的数组 toSorted 方法排序过后返回一个新数组（不会影响原数组顺序）
console.log("toSorted: ", {
  newArr,
  sortedNewArr,
});
