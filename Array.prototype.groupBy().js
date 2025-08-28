/**
 * ECMAScript 2023 新增：Array.prototype.groupBy()
 * 作用：把数组分成多个小组，返回一个分组后的对象
 */
const fruits = [
  { name: "苹果", price: 10, category: "水果" },
  { name: "香蕉", price: 5, category: "水果" },
  { name: "胡萝卜", price: 8, category: "蔬菜" },
];

// 旧方法（需要手动写循环）
const manualGrouped = {};
fruits.forEach((item) => {
  const key = item.category;
  if (!manualGrouped[key]) {
    manualGrouped[key] = [];
  }
  manualGrouped[key].push(item);
});
console.log("手动分组:", manualGrouped);
// {
//   水果: [ {name: '苹果',...}, {name: '香蕉',...} ],
//   蔬菜: [ {name: '胡萝卜',...} ]
// }

// 新方法 groupBy（一行代码搞定）
const grouped = fruits.groupBy((item) => item.category);
console.log("groupBy分组:", grouped);
// {
//   水果: [ {name: '苹果',...}, {name: '香蕉',...} ],
//   蔬菜: [ {name: '胡萝卜',...} ]
// }

/**
 * 简单说明：
 * 1. 参数是一个"分组规则"函数（告诉JS如何分组）
 * 2. 返回值是一个对象：
 *    - 对象的键 = 分组规则返回的值
 *    - 对象的值 = 属于该组的所有元素组成的数组
 * 3. 原数组不会被修改
 */

// 更简单的例子：按数字大小分组
const numbers = [10, 20, 30, 15, 25];
const numberGroups = numbers.groupBy((num) =>
  num > 20 ? "大于20" : "小于等于20"
);
console.log("数字分组:", numberGroups);
// {
//   '小于等于20': [10, 20, 15],
//   '大于20': [30, 25]
// }
