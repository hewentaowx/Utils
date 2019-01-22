// 构造函数Person
function Person() {

}
const person = new Person();
console.log(person.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person);

// ES5
console.log(Object.getPrototypeOf(person) === Person.prototype);

/**
 * 实例与原型
 * 当读取实例的属性的适合如果找不到就会查找与对象关联的原型中的属性
 * 如果还查不到就去找原型的原型直到最顶层为止
 */
function Animal() {}
Animal.prototype.name = 'black dog';

const animal = new Animal();
animal.name = 'white cat';

console.log(animal.name);
delete animal.name;
console.log(animal.name);

// 原型的原型
const obj = {}; // const obj = new Object()
obj.name = 'hwt';
console.log(obj.name);

function Father() {
  this.property = true;
}

Father.prototype.getFatherValue = function() {
  return this.property;
};

function Son() {
  this.sonProperty = false;
}

// 继承Father
Son.prototype = new Father();
Son.prototype.getSonValue = function() {
  return this.sonProperty;
};

const instance = new Son();
console.log(instance.getFatherValue());
console.log(instance.getSonValue());
console.log(instance.constructor === Father);
console.log(Son.prototype.constructor === Father);
console.log(instance.constructor === Son.prototype.constructor);


// 原型链问题：1：当原型链包含引用类型值得原型时，该引用类型值会被所有的实例共享
// 2: 创建子类类型不能向超类型的构造函数中传参

function Color() {
  this.colors = ['red', 'green', 'blue'];
}

function _Color() {

}

_Color.prototype = new Color();

let test = new _Color();
test.colors.push('white');
console.log(test.colors);

let test1 = new _Color();
console.log(test1.colors);

//
function Test() {
  this.number = [1, 2, 3];
}

function TTest() {
  Test.call(this);
}

let test2 = new TTest();
test2.number.push(4);
console.log(test2.number);

let test3 = new TTest();
console.log(test3.number);

console.log(Object instanceof Function);
console.log(Function instanceof Object);

console.log(Object.prototype);

const fibo = n => n < 2 ? 1 : n * fibo(n - 1);
console.log(fibo(4));
