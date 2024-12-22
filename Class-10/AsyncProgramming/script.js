
// console.log('START');

// function fun() {
//     console.log('Inside fun');
// }


// function performIO() {
//     console.log('IO is complete');
// }

// function callWithdelay(delay, callback) {
//     const currentTime = new Date().getTime();
//     while (new Date().getTime() < currentTime + 1000 * delay) { }
//     callback();
// }

// fun();
// // performIO();


// callWithdelay(3, performIO);

// console.log('END');



// -------------------------- Writing a non blocking code for delay ------------


// console.log('START');


// function insertIntoDB() {
//     console.log('Successfully Inserted the values');
// }

// setTimeout(insertIntoDB, 8000);

// console.log('END');


// ---------------------------------

console.log('START');

setTimeout(function () {
    console.log('Inside set timeout');
}, 0);

while (true) {
    console.log('Inside while loop');
}

console.log('END');


// -------------------------------