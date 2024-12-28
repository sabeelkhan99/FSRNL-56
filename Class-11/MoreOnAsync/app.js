

// SetInterval
const id = setInterval(function () {
    console.log('Inside set interval');
}, 1000);


// Two Problems

// 1. Callback Hell
// 2. Inversion of Control

// Callback Hell - Below is just an example, might not be syntactically correct
// fetch('http://google.com', function (err, data) {
//     if (err) {
//         throw err;
//         //djshdfdjk
//         //fsghjdkl
//         ///fdshjfkl

//     }
//     fetch('http://api.github.com/users/sabeelkhan99', function (err, data) {
//         if (err) {
//             throw err;
//         }
//          //djshdfdjk
//         //fsghjdkl
//         ///fdshjfkl
//         console.log(data);
//         fetch('http://api.github.com/users/repos/sabeelkhan99', function (err, data) {
//             if (err) {
//                 throw err;
//             }
//              //djshdfdjk
//             //fsghjdkl
//             ///fdshjfkl
//             console.log(data);
//         })
//     })
//     console.log(data);
// })