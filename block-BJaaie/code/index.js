//Pseudoclassical Pattern

 function Animal(location, numberOfLegs) {
     this.location = location;
     this.numberOfLegs = numberOfLegs;
 }
 Animal.prototype = {
     eat() {
         console.log(`I live in ${this.location} & I can eat`);
     },
     changeLocation(newLocation) {
         this.location = newLocation;
     },
     summary() {
         return `I live in ${this.location} and I have ${this.numberOfLegs}`
     }
 }
 function Dog(location, numberOfLegs, name, color) {
     Animal.call(this, location, numberOfLegs);
     this.name = name;
     this.color = color;
 }
 Dog.prototype = {
     bark() {
         alert(`I am ${this.name} and I can bark 🐶`)
     },
     changeName(newName) {
         this.name = newName;
     },
     changeColor(newColor) {
         this.color = newColor;
     },
     summary() {
         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
     }
 }
 Object.setPrototypeOf(Dog.prototype, Animal.prototype);
 function Cat(name, colorOfEyes, location, numberOfLegs) {
     Animal.call(this, location, numberOfLegs);
     this.name = name;
     this.colorOfEyes = colorOfEyes;
 }
 Cat.prototype = {
     meow() {
         alert(`I am ${this.name} and I can do mewo meow 😹`)
     },
     changeName(newName) {
         this.name = newName;
     },
     changeColorOfEyes(newColor) {
         this.color = newColor;
     },
     summary() {
         return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
     }
 }

 Object.setPrototypeOf(Cat.prototype, Animal.prototype);


//Class pattern


class Animal {

    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }

    eat() {
        console.log(`I live in ${this.location} and I can eat`)
    }

    changeLocation(newLocation) {
        this.location = newLocation;
    }

    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}


class Dog extends Animal {

    constructor(name, location, numberOfLegs, color) {
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
    }

    bark() {
        alert(`I am ${this.name} and I can bark 🐶`)
    }

    changeName(newName) {
        this.name = newName;
    }

    changeColorOfEyes(newColor) {
        this.color = newColor;
    }

    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }    
}

class Cat extends Animal{
    constructor(name, colorOfEyes, location, numberOfLegs) {
        super(location, numberOfLegs);
        this.name =name;
        this.colorOfEyes = colorOfEyes;
    }

            meow() {
                 alert(`I am ${this.name} and I can do mewo meow 😹`);
             }

             changeName(newName) {
                 this.name = newName;
             }
             changeColorOfEyes(newColor) {
                 this.color = newColor;
             }

             summary() {
                 return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
             }
}