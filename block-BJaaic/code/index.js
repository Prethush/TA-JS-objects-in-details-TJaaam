
let animalMethods = {
    eat() {
        console.log(`I live in ${this.location} & I can eat`);
    },

    changeLocation(newLocation) {
        this.location = newLocation;
    },

    summary() {
        return `I live in ${this.location} & I have ${this.numberOfLegs}`;
    }

}

function createAnimal(location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    
    return animal;
}

let dogMethods = {
    bark() {
        alert(`I am ${this.name} & I can bark`);
    },

    changeName(newName) {
        this.name = newName;
    },

    changeColor(newColor) {
        this.color = newColor;
    },

    summary() {
        return `I am ${this.name} & I am of ${this.color}. I can also bark`;
    },

    summary() {
        return `I am ${this.name} & I am of ${this.color}. I can also bark`;
    }

}
    Object.setPrototypeOf(dogMethods, animalMethods);

function createDog(name, location, numberOfLegs, color) {
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.location = location;
    dog.numberOfLegs = numberOfLegs;
    dog.color = color;

    return dog;
}

let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },

    changeName(newName) {
        this.name = newName;
    },

    changeColor(newColor) {
        this.color = newColor;
    },

    summary() {
        return `I am ${this.name} & color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    }


}

Object.setPrototypeOf(catMethods, animalMethods);

function createCat(name, location, numberOfLegs, colorOfEyes) {
    let cat = Object.create(catMethods);
    cat.name = name;
    cat.location = location;
    cat.colorOfEyes = colorOfEyes;
    cat.numberOfLegs = numberOfLegs;
    
    return cat;
}


