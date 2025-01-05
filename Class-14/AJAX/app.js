// const person = {
//     name: 'Max',
//     age: 21,
//     favColor: "Blue"
// }

// const str = JSON.stringify(person);
// console.log(str);


// const req = new XMLHttpRequest();

// req.onerror = function () {
//     console.log(this);
// }

// req.onload = function () {
//     const shows = JSON.parse(this.responseText);
//     console.log(shows);
// }

// req.open('GET', 'https://api.tvmaze.com/search/shows?q=girls');
// req.send();

// ----------------------------------------------------- fetch --------------

// async function main(){
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
//     const data = await res.json();
//     console.log(data);
// }

// main();

// -------------------------------------------------- Third Party Libraries: jQuery ------------------

// $.get( "https://api.tvmaze.com/search/shows?q=girls", function( data ) {
//     console.log(data);
// });


// -------------------------------------------------- Third Party Libraries: axios ------------------

axios.get('https://api.tvmaze.com/search/shows?q=girls')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })






