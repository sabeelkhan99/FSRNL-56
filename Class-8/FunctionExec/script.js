// var a = 100;

// function fun() {
//     console.log('Inside fun');
// }

// fun();

// console.log(a);

//Global Scope: Enything which is not inside of any other function it is global scope.

console.log('START');

var b = 100;

function fun1() {
    var c = 200;
    console.log(c);

    function fun2() {
        console.log(c);
    }
    fun2();
}

fun1();

console.log(b);

console.log('END');