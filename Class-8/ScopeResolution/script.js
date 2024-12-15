
// let a = 300; // script scope

// {
//     let a = 100; // block
//     console.log(a);
// }

// console.log(a);


// // Global Scope : window
// var a1 = 888;

// function add() {
//     const res = 2 + 3;
//     console.log(res); //functional scope
// }



// Scopes resolution is directly related to lexical environment


// function c() {
//     console.log('inside c');
// }


// function a() {
//     const x = 100;
//     function b() {
//         const y = 300;
//         console.log(y);
//         function e() {
//             console.log('inside e');
//         }
//     }
// }





// function a() {
//     // let c = 100;

//     function b() {
//         console.log(c);
//     }
//     b();
// }

// a();



let name = 'Sarah';

function print() {
    console.log(name);
}

function sayHello() {
    let name = 'Max';
    print();
    console.log(name);
}

sayHello();