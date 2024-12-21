
const radii = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Radius of circle
// Write function to calculate: area (PI*R^2), diameter(2*R) and circumference(2*PI*R)
// Math.PI => 3.14
// Answer format : ArrayOfAreas[], ArrayOfDiameters[], ArrayOfCicumference[]


// function calculateCircumference(radii) {
//     const res = [];
//     for (const radius of radii) {
//         res.push(2 * Math.PI * radius);
//     }
//     return res;
// }

// function calculateDiameters() {
//     const res = [];
//     for (const radius of radii) {
//         res.push(2 * radius);
//     }
//     return res;
// }

// function calculateAreas() {
//     const res = [];
//     for (const radius of radii) {
//         res.push(Math.PI * radius * radius);
//     }
//     return res;
// }


// console.log(calculateCircumference(radii));
// console.log(calculateDiameters(radii));
// console.log(calculateAreas(radii));

const area = radius => Math.PI * radius * radius;
const circumference = radius => 2* Math.PI * radius;
const diameter = radius => 2 * radius;


function calculate(radii, logic) {
    const res = [];
    for (const radius of radii) {
        res.push(logic(radius));
    }
    return res;
}

console.log(calculate(radii, circumference)) //circumference
console.log(calculate(radii, diameter)) //circumference
console.log(calculate(radii, area)) //circumference
