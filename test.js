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
