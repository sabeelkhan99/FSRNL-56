const grandParent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const figures = document.querySelectorAll('figure');
const article = document.querySelector('article');

grandParent.addEventListener('click', function (event) {
    console.log('Grand Parent');
}, true);

parent.addEventListener('click', function (event) {
    console.log('Parent');



    event.stopPropagation();
}, true);

child.addEventListener('click', function (event) {
    console.log('child');
}, true);

// useCapture - true => capturing phase
// useCapture - false => bubbling phase

// ---------------------------------------

// Not optimised
// for (const figure of figures) {
//     figure.addEventListener('click', function () {
//         console.log(figure.innerText);
//     });
// }


// article.addEventListener('click', function (event) {
//     if (event.target.nodeName != 'FIGURE') {
//         return;
//     }
//     console.log(event.target.innerText);
// });





