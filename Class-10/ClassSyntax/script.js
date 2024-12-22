class Car{
    // This gets called each time you create a object of type 'Car'
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    // Getters
    get getName() {
        return this.name;
    }

    get getPrice() {
        return this.price;
    }

    get getColor() {
        return this.color;
    }

    // Setters
    set setPrice(newPrice) {
        if (typeof newPrice != 'number') {
            throw new Error('Invalid price type');
        }
        if (newPrice < 0) {
            throw new Error('Price cannot be negative');
        }
        this.price = newPrice;
    }

    // Methods
    printCar() {
        console.log('----------------------');
        console.log(`Name : ${this.name}`);
        console.log(`Price : ${this.price}`);
        console.log(`Color : ${this.color}`);
        console.log('----------------------');
    }
}

class RacingCar extends Car{
    constructor(name, price, color, topSpeed) {
        super(name, price, color); //we are calling a constructor of parent class.
        this.topSpeed = topSpeed;
    }

    get getTopSpeed() {
        return this.topSpeed;
    }
}


const bmw = new Car('BMW', 1000, 'red');
const ferrari = new Car('Ferrari', 2000, 'black');

const r1 = new RacingCar('Bugatti', 999, 'yellow', 300);



class Point{
    static dummyName = 'Some Dummy Value';
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.hypot(dy, dx);
    }
}


const p1 = new Point(0, 4);
const p2 = new Point(5, 0);

console.log(Point.distance(p1, p2));
