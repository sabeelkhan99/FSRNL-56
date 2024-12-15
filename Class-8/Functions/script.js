const a = 10;
const b = 20;

const res1 = a + b;
console.log(res1);

//....1000 lines

const x = 30;
const y = 40;

const res2 = x + y;
console.log(res2);


function add(x, y) { // x and y are parameters to the function add
    const res = x + y;
    return res;
}

add(3, 4) // 3 and 4 are the arguments to the function

function print() {
    console.log('Printing some message');
}

// console.log(add(40, 50));
// print();


// Function expression
const f = function() {
    console.log('Inside fun');
}

// Arrow function - Syntactical Sugar

const arrowFun = () =>{
    console.log('Inside fun');
}


// Arrow function implicit return
const sqrt = num => Math.sqrt(num);




