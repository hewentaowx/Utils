/* ES6 */
// 类 class
class Animal {
  // 构造函数 实例化的时候将被调用 如果不指定将会有一个不带参数的默认构造函数
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // toString是原型对象上的属性
  toString() {
    console.log(`name is ${this.name}, color is ${this.color}`);
  }
}

let animal = new Animal('dog', 'white');
animal.toString();

console.log(animal.hasOwnProperty('name'));
console.log(animal.hasOwnProperty('toString'));
console.log(animal.__proto__.hasOwnProperty('toString'));

class Cat extends Animal {
  constructor(props) {
    super(props);
    // this.props = props;
  }
  toString() {
    console.log(super.toString());
  }
}

let cat = new Cat('cat', 'white');
cat.toString();

console.log(cat instanceof Cat);
console.log(cat instanceof Animal);


// 解构赋值
const foo = [1, 2, 3, 4, 5];
const [one, two, three] = foo;
console.log(`one is ${one}, two is ${two}, three is ${three}`);
const [first, , , four] = foo;
console.log(`first is ${first}, four is ${four}`);

// 延展语法
let arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(4); // 基本类型值不可变
console.log(arr);
console.log(arr2);

let obj = {
  a: 1,
  b: [1, 2, 3]
};
let obj2 = { ...obj };
obj2.a = 2;
obj2.b.push(6); // 引用类型值可变
console.log(obj, obj2);

// 对象属性简写
const name = 'hwt';
const age = 26;
const city = 'wuhan';
const student = { name, age, city };
console.log(student);

/* ES7 */
// includes
const arr4 = [1, 2, 3];
console.log(arr4.includes(1));

// 指数操作符
const cal = (base, exponent) => {
  if (exponent === 1) {
    return base;
  } else {
    return base * cal(base, exponent - 1);
  }
};
console.log(cal(2, 10));
console.log(Math.pow(2, 10));
console.log(2 ** 10);

/* ES8 */
// async/await
// Object.values()
// Object.entries()
// String padding
// 函数参数列表结尾允许逗号
// Object.getOwnPropertyDescriptors()

const obj3 = {
  a: 1,
  b: 2,
  c: 3
};
const values = Object.keys(obj3).map(key => obj3[key]);
console.log(values);

const values1 = Object.values(obj3);
console.log(values1);

for (let [key, value] of Object.entries(obj3)) {
  console.log(`key: ${key}, value: ${value}`);
}

let animal1 = {
  _age: 1,
  get age() {
    return this._age;
  },
  set age(val) {
    this._age = val;
  }
};
console.log('自身属性--->>', Object.getOwnPropertyDescriptors(animal1));
console.log(animal1.age);
animal1.age = 26;
console.log(animal1.age);
