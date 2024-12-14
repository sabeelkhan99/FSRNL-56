// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

// for (initialisation; condition; updation){

// }

// for (let i = 1; i <= 7; i++){
//     if (i === 5) {
//         console.log(i);
//         // break; // exits you from innermost loop
//         continue; // 
//     }
//     console.log(i);
// }


// let num = 100;

// while (num >= 0) {
//     console.log(num);
//     num = num - 10;
// }

// let num = 200;

// while (num <= 200) {
//     console.log(num);
//     num = num - 10;
// }


const products = ['Macbook Air', 'Jeans', 'Airpods', 'T Shirt'];

// Imperative way of programming
// for (let i = 0; i < products.length; i++){
//     console.log(products[i]);
// }

// Declarative way
// for (const product of products) {
//     console.log(product);
// }

// Iterable Objects: arrays, strings, map, set

const person = {
    name: 'Max',
    age: 21,
    favColor: 'green'
}


// For in loops
for (let prop in person) {
    console.log(`${prop} ----> ${person[prop]}`);
}


