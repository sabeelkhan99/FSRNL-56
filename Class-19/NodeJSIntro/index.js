console.log("Hello World");

const arr = [1, 2, 3, 10, 99, 45];

console.log(arr.sort((a, b) => a - b));


class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person('Max', 25);

console.log(p1);

