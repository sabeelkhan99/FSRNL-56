
// // Creation 
// const p = new Promise((resolve, reject) => {
//     setTimeout(function () { 
//         const randomNum = Math.floor(Math.random() * 10 + 1);
//         if (randomNum < 5) {
//             resolve(`Promise get resolved with number ${randomNum}`);
//         } else {
//             reject(new Error(`Promise get rejected with number ${randomNum}`));
//         }
//     }, 2000) 
// });

// console.log('START');

// // Consuming a promise
// p.then((data) => console.log(data))
//     .catch((err) => console.error(err.message))
//     .finally(() => console.log('Notifying the user'));


// console.log('END');


// const promise = fetch('https://api.github.com/users/sabeelkhan99');

// promise
//     .then(function (res) {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.followers);
//     })
//     .catch((err) => console.log(err));



// // Async- Await
// async function add(x, y) {
//     if (x === 2) {
//         throw new Error('value of x is 2');
//     }
//     return x + y;
// }



async function main() {
    try {
        console.log('Starting to fetch')
        const res = await fetch('https://fakestoreapi.com/products/2');
        console.log('starting to parse the data');
        const data = await res.json();
        console.log('Data is parsed');
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('Inside finally');
    }
}   

console.log('START');

main();

console.log('END');

console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')
console.log('After end')



// Q. There are productIds given to you - productIds: [1,6,7,8,.....].

// https://fakestoreapi.com/products/2








