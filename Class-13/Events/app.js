const btn = document.querySelector('button');


// rgb(0-255, 0-255, 0-255)
// function getRandomRGB() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }

function printToConsoleHandler() {
    console.log('Printing some random stufffff....');
}

function clickHandler() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} 

// btn.onclick = clickHandler;
// btn.onclick = printToConsole;

btn.addEventListener('click', clickHandler);
btn.addEventListener('click', printToConsoleHandler);


// Mouse Events

const section = document.querySelector('section');

section.addEventListener('mouseenter', function () {
    this.style.backgroundColor = 'orange';
});

section.addEventListener('mouseleave', function () {
    this.style.backgroundColor = 'lightgreen';
});

// Keyboard Events

const input = document.querySelector('input');

input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        console.log(input.value);
    }
});


// Form Events
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = form.elements[0].value;
    const password = form.elements[1].value;

    console.log(username);
    console.log(password);
});


// Copy Event
const p = document.querySelector('p');

p.addEventListener('copy', function () {
    console.log('Stop copying from here 😡😡😡😡😡😡')
});





