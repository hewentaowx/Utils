/* ES6黑科技 */

// 变量变换
let a = 'world';
let	b = 'hello';
[a, b] = [b, a];
console.log(`${a},${b}`);

// 数组最大值
const max = arr => Math.max(...arr);
console.log(max([1, 2, 3])); // 3

// 数组求和
const sum = arr => arr.reduce((r, c) => (r + c), 0);
console.log(sum([1, 2, 3])); // 6

// 拷贝
const arr1 = [1, '3', { a: 1 }, 666];
const copyArr = [...arr1];
console.log(copyArr); // [ 1, '3', { a: 1 }, 666 ]

// 拼接数组
const arr2 = [1, 2, 3];
const arr3 = [4, { a: 8 }];
// 老办法
const result1 = arr2.concat(arr3);
console.log(result1);

const result2 = [].concat(arr2, arr3);
console.log(result2);

// 新办法
const result3 = [...arr2, ...arr3];
console.log(result3);

