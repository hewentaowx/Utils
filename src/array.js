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

// 取出对象中的 name 单独放在一个数组中
const arr6 = [
  {id: 10, name: 'zhangsan'},
  {id: 11, name: 'lisi'},
  {id: 12, name: 'wangwu'},
];
const arr6_result = arr6.reduce((a, c) => {
  return [
    ...a,
    c.name
  ];
}, []);
console.log(arr6_result); // [ 'zhangsan', 'lisi', 'wangwu' ]

/**
 * for...in任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行。
 * 但是只遍历可枚举的属性，需要注意的是枚举的时候还会枚举到对象从其构造函数原型中继承的属性
 *
 * 语法：
 * for (variable in object) {...}
 *
 * 参数说明：
 * variable 属性名
 * object   被迭代枚举其属性的对象
 */

// 遍历key
const obj = {
  name: 'sonderzzz',
  age: 26,
  sex: 'male',
};
for (let v in obj) {
  console.log(`${v} is ${obj[v]}`);
}

// 注意：有原型方法时，for...in会遍历到原型链上的属性
const arr7 = [1, 2, 3, 4, 5];
Array.prototype.len = function() {
  return this.length;
};
arr7.len();
for (let v in arr7) {
  console.log(v); // 0 1 2 3 4 len
}

/**
 * for...of一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。
 * for...of读取的是键值 for...in读取的是键名
 * 语法：
 * for (variable of object) {...}
 *
 * 参数说明：
 * variable 属性名
 * object   被迭代枚举其属性的对象
 */
const arr8 = ['red', 'green', 'blue'];
for (let v of arr8) {
  console.log(v);
}

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
const arr10 = [1, 2, 3, 4, 5];
const arr10_result = arr10.some(c => {
  return c > 5;
});
console.log(arr10_result); // false

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
const arr11 = [1, 2, 3, 4, 5];
const arr11_result = arr11.every(c => {
  return c < 5;
});
console.log(arr11_result); // false


// 总结：
// 如果需要将数组按照某种规则映射为另一个数组应该用 map。
// 如果需要进行简单的遍历，用 forEach 或者 for...of。
// 如果需要对迭代器进行遍历，用 for...of.
// 如果需要过滤出符合条件的项，用 filter.
// 如果需要先按照规则映射为新数组，再根据条件过滤，那就用一个 map 加一个 filter。
// 最后慎用 for...in
