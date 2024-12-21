
// console.log(a);

// fun();

// function fun() {
//     console.log('Inside fun');
// }

// let a = 100; //TDZ - Temporal Dead Zone

// ---------------------Hoisting in case of function expression & Arrow function 

x();

y();

z();

var x = function () {
    console.log('Inside funtion x');
}

var y = () => {
    console.log('Inside y');
}

function z() {
    
}