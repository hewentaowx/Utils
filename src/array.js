// 很多初学者总会陷入过分追求性能的误区，而忽略了语义和可读性。
// 如果只谈性能，显然是 for > forEach > map，
// 为什么 for 的性能比较好？读一下 forEach 和 map 的规范就知道了。
// map 会返回一个等长数组，forEach 不会，所以 forEach 大于 map。
// 但是哪个快和应该使用哪个，并不应该划等号。
// 如果你需要将数组按照某种规则映射为另一个数组，就应该用 map。
// 如果你需要进行简单的遍历，用 forEach 或者 for of。
// 如果你需要对迭代器进行遍历，用 for of.
// 如果你需要过滤出符合条件的项，用 filter.
// 如果你需要先按照规则映射为新数组，再根据条件过滤，那就用一个 map 加一个 filter。
// 不要担心这样会慢，你那点数据量浏览器根本不 care。
// 如果你真的需要考虑性能，或者有 break 的需求，就用 for 吧。
// 但是如果真的到了这一步，你应该不会来问这个问题。

/**
 * map()方法返回一个新数组，结果为该数组中的每一个元素都调用函数后返回的结果。
 *
 * 语法：
 * arr.map(callback(currentValue[, index[, array]])[, thisArg])
 *
 * 参数说明：
 * currentValue  数组当前元素
 * index(可选)   数组当前元素的下标
 * array(可选)   map方法调用的数组
 * thisArg(可选) 执行callback函数时使用的this值
 *
 * 返回值：新数组
 */

// 将原数组统一加上8
const arr1 = [1, 2, 3, 4, 5];
const arr_temp = arr1.map(c => {
  return c + 8;
});
console.log(arr_temp); // [9, 10, 11, 12, 13]
console.log(arr1); // [1, 2, 3, 4, 5]

// 格式化带对象的数组
const arr_kv = [
  {key: 1, value: 1},
  {key: 2, value: 2},
  {key: 3, value: 3},
];
const arr_format = arr_kv.map(c => {
  let obj = {};
  obj[c.key] = c.value;
  return obj;
});
console.log(arr_format); // [{ '1': 1 }, { '2': 2 }, { '3': 3 }]
console.log(arr_kv); // [{ key: 1, value: 1 }, { key: 2, value: 2 }, { key: 3, value: 3 }]

/**
 * filter()方法返回一个新数组，新数组中的元素都是通过筛选，符合条件的所有元素。filter()不会对空数组检测
 *
 * 语法：
 * arr.filter(callback(currentValue[, index[, array]])[, thisArg])
 *
 * 参数说明：
 * currentValue  数组当前元素
 * index(可选)   数组当前元素的下标
 * array(可选)   map方法调用的数组
 * thisArg(可选) 执行callback函数时使用的this值
 *
 * 返回值：新数组
 */

// 返回数组中是奇数的元素
const arr2 = [1, 2, 3, 4, 5];
const arr2_odd = arr2.filter(c => {
  return (c % 2) !== 0;
});
console.log(arr2_odd); // [1, 3, 5]
console.log(arr2); // [1, 2, 3, 4, 5]

/**
 * foreach()方法没有返回值，该方法调用数组的每个元素，并将元素传递给回调函数。
 * 缺点：
 * 不能中途控制，无法break和return终止循环一旦开始只能等循环结束。
 *
 * 语法：
 * arr.foreach(callback(currentValue[, index[, array]])[, thisArg])
 *
 * 参数说明：
 * currentValue  数组当前元素
 * index(可选)   数组当前元素的下标
 * array(可选)   map方法调用的数组
 * thisArg(可选) 执行callback函数时使用的this值
 *
 * 返回值：无
 */

// 复制一个数组
const arr3 = [1, 2, 3, 4, 5];
const copy = [];
arr3.forEach(c => {
  copy.push(c);
});
console.log(copy); // [1, 2, 3, 4, 5]

/**
 * reduce()方法对数组中的每一个元素执行一次函数并将结果汇总为一个值。另外reduce也可作为高阶函数用于函数的compose
 *
 * 语法：
 * arr.reduce(callback(accumulator[, currentValue[, currentIndex[, array]]]))[, initialValue]
 *
 * 参数说明：
 * accumulator          累计器累计回调的返回值或initialValue
 * currentValue         数组中正在处理的元素
 * currentIndex(可选)   数组中正在处理的元素的索引
 * array(可选)          调用reduce()的数组
 * initialValue(可选)   第一次调用callback函数的第一个参数值
 */
// 返回累积值
const arr4 = [1, 2, 3, 4, 5];
const arr4_result = arr4.reduce((a, c) => {
  return a + c;
});
console.log(arr4_result); // 15

const arr5 = [1, 2, 3, 4, 5];
const arr5_result = arr5.reduce((a, c) => {
  return a + c;
}, 10);
console.log(arr5_result); // 25

/**
 * for...in
 */

/**
 * for...of
 */

/**
 * some()方法用于检测数组中的元素是否满足指定条件，依次执行数组中的每个元素，一旦有元素满足则后续不再执行返回true。
 *
 * 语法：
 * arr.some(callback(currentValue[, index[, array]])[, thisArg])
 *
 * 参数说明：
 * currentValue  数组当前元素
 * index(可选)   数组当前元素的下标
 * array(可选)   map方法调用的数组
 * thisArg(可选) 执行callback函数时使用的this值
 *
 * 返回值：boolean
 */

// 判断数组中是否有大于5的元素
const arr6 = [1, 2, 3, 4, 5];
const arr6_result = arr6.some(c => {
  return c > 5;
});
console.log(arr6_result); // false

/**
 * every()方法用于检测数组中每一个元素是否满足指定条件，有一个元素不满足则后续不再执行返回false。
 *
 * 语法：
 * arr.every(callback(currentValue[, index[, array]])[, thisArg])
 *
 * 参数说明：
 * currentValue  数组当前元素
 * index(可选)   数组当前元素的下标
 * array(可选)   map方法调用的数组
 * thisArg(可选) 执行callback函数时使用的this值
 *
 * 返回值：boolean
 */

// 判断数组中是否每个元素都小于5
const arr7 = [1, 2, 3, 4, 5];
const arr7_result = arr7.every(c => {
  return c < 5;
});
console.log(arr7_result); // false
