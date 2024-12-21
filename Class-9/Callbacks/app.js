function fun(func) {
    //...10 lines throw Error
    func();
}

function a() {
    console.log('This is function a');
    // code it closes the connection with the database
}

fun(a);

//a : callback function

// Problem in the above code : IOC