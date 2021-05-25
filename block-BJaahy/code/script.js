
//Square class
class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
        this.numberofTimes = 0;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height} `);
    }
    calcArea() {
        return this.height * this.width;
    }

    get area() {
        if(this.numberofTimes === 4){
             alert("Upper limit reached");
        }else {
        this.numberofTimes++;
        return this.height * this.width;
        
        }
    }

    set area(sqArea) {
        if(Number.isInteger(Math.sqrt(sqArea))) {
            this.height = Math.sqrt(sqArea);
            this.width = Math.sqrt(sqArea);
            
        } else {
            alert(`Not a valid Input`);
        }
    }

    static isEqual(sqr1, sqr2) {
        return sqr1.height * sqr1.width === sqr2.height * sqr2.width;
    }

   
    
}

let sq1 = new Square(10);
let sq2 = new Square(8);


//User Class

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fName) {
        if(fName.length >= 5) {
        this.firstName = fName.split(" ")[0];
        this.lastName = fName.split(" ")[1];
        } else {
            alert(`Full name should be more than 5 characters`);
        }
    }

    nameContains(str) {
        if(this.fullName.includes(str)) {
            return true;
        } else {
            return false;
        }
    }
}

let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Snow");