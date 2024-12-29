const para = document.getElementById('para');
const favMovies = document.getElementsByClassName('fav-movie');

// console.log(para)

para.style.fontSize = '2rem';
para.style.fontFamily = 'sans-serif';
para.style.textTransform = 'uppercase';
para.style.textDecoration = 'line-through';
para.style.fontWeight = 'lighter';


// Casing

// Pascal Case- FontSize
// Kebab Case - font-size # Used is CSS
// Camel Case - fontSize # Used in JS
// Snake Case - font_size # Used in python


// console.log(favMovies);

for (const movie of favMovies) {
    movie.style.fontWeight = 'bold';
    movie.style.color = 'purple'
}





// ----------------------------------

const img = document.querySelector('img')

const URL_ONE = "https://images.unsplash.com/photo-1731330269319-0f053cd5d74b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8";
const URL_TWO = "https://images.unsplash.com/photo-1732287931034-c4cc1b06de6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw8fHx8ZW58MHx8fHx8";

let isTrue = true;

function toggleImage() {
    if (isTrue) {
        img.setAttribute('src', URL_ONE);
    } else {
        img.setAttribute('src', URL_TWO);
    }
    isTrue = !isTrue;
}

// setInterval(toggleImage, 1000);




// --------------------------------------------