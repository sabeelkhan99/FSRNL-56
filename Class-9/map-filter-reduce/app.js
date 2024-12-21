// Map 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = (element) => {
    return element ** 2;
}

// [1,4,9,16,25]
const squareOfNums = nums.map(square);

console.log(squareOfNums);

const squareRootOfNums = nums.map(num => Math.sqrt(num));

console.log(squareRootOfNums);


// Filter

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const evenNums = nums.filter(isEven);

console.log(evenNums);

const oddNums = nums.filter(num => num % 2 !== 0);

console.log(oddNums);

// Reduce

//total = 0 - Acting as accumulator
// num - Acting as currentValue
const sum = nums.reduce((total, num) => { 
    return total + num;
}, 0);

console.log(`Sum is : ${sum}`);


const products = [
    {
        name: 'Iphone',
        price: 100,
        qty: 2
    },
    {
        name: 'Macbook',
        price: 200,
        qty: 1
    },
    {
        name: 'Ipad',
        price: 300,
        qty: 1
    }
]

// Cart Total 

const cartTotal = products.reduce((acc, product) => acc + product.price * product.qty, 0);

console.log(cartTotal);


// If foodName has word : chicken, egg => labeled as nonVeg else its veg
// jainMenu : garlic, onions => 

const menu = [
    'Chicken Biryani',
    'Kadhai Paneer',
    'Dal Makhni',
    'Onion Rings',
    'Garlic Naan',
    'Onion Pizza',
    'Spinash & Mushroom Pizza',
    'Butter Chicken',
    'Egg curry',
    'Egg Rice',
    'Garlic Chicken',
    'Garlic Rice',
    'Tandoori Chicken',
    'Paneer Butter Masala',
    'Paneer Tikka',
    'Egg bhurji'
]


const isVeg = (food) => {
    if (food.toLowerCase().includes('chicken') || food.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

const isOnionGarlicFree = (food) => {
    if (food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}



const vegMenu = menu.filter(isVeg);

const jainMenu = vegMenu.filter(isOnionGarlicFree);

const nonVegMenu = menu.filter((food)=> !isVeg(food));

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);

console.log(nonVegMenu);



