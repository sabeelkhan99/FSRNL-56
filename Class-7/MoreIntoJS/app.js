// if () {
//     // body of if statement
// }

// const isRaining = true;

// if (isRaining) {
//     console.log('Take the umberella');
// } else {
//     console.log('Dont take the umbrella');
// }

const successTemplate = `Your transaction of amount Rs.20 was successfull`;
const failedTemplate = `Your transaction of amount Rs.20 was failed`;
const cancelledTemplate = `Your transaction of amount Rs.20 was cancelled by you`;
const expiredTemplate = `Your transaction of amount Rs.20 is expired`;

const paymentStatus = 'CHARGED' //FAILED, EXPIRED, CANCELLED, PENDING

// if (paymentStatus === 'SUCCESS') {
//     console.log(`Sending : ${successTemplate}`);
// }
// else if (paymentStatus === 'FAILED') {
//     console.log(`Sending : ${failedTemplate}`);
// }
// else if (paymentStatus === 'EXPIRED') {
//     console.log(`Sending : ${expiredTemplate}`);
// }
// else if (paymentStatus === 'CANCELLED') {
//     console.log(`Sending : ${cancelledTemplate}`);
// }
// else {
//     // no op
// }


// switch (paymentStatus) {
//     case "SUCCESS":
//         console.log(`Sending : ${successTemplate}`);
//         break;
//     case "FAILED":
//         console.log(`Sending : ${failedTemplate}`);
//         break;
//     case "EXPIRED":
//         console.log(`Sending : ${expiredTemplate}`);
//         break;
//     case "CANCELLED":
//         console.log(`Sending : ${cancelledTemplate}`);
//         break;
//     default:
//         console.error('No op');
// }

// switch (paymentStatus) {
//     case "CHARGED":
//     case "COMPLETED":
//     case "SUCCESS":
//         console.log(`Sending : ${successTemplate}`);
//         break;
//     case "FAILED":
//         console.log(`Sending : ${failedTemplate}`);
//         break;
//     case "EXPIRED":
//         console.log(`Sending : ${expiredTemplate}`);
//         break;
//     case "CANCELLED":
//         console.log(`Sending : ${cancelledTemplate}`);
//         break;
//     default:
//         console.error('No op');
// }

const age = parseInt(prompt("Enter the age!"));

if (age < 18) {
    console.log('You cannnot enter the club');
} else if(age>=18 && age<25) {
    console.log('You can enter but cannot drink');
} else {
    console.log('You can enter and drink');
}

// Falsy values : 0, "", null, undefined, NaN, false