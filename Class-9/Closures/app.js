

function fun() {
    let a = 100;
    function innerFun() {
        console.log(a++);
    }
    return innerFun;
}


// Closure: {a: 101}
const f = fun();
f(); //101
f(); //102
f(); //103
f(); //104


// Closure: {a: 100}
const e = fun();

e(); //101
e(); //102
e(); //103
e(); //104



// HOF - Higher Order Functionss

function a(x, y) {
    return z;
}

// a is HOF, x,y or z is a function