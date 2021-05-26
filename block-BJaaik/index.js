class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(`I can eat`);
    }

    sleep() {
        console.log(`I can sleep`);
    }
    walk() {
        console.log(`I can walk`);
    }
}

class Player extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.sportsName = "Football";
    }
    

    play() {
        console.log(`I am a ${this.sportsName} player`);
    }
}

class Teacher extends Person{
    constructor(name, age, gender) {
        super(name, age, gender);
        this.institute = "IIT";
    }

    
    teach() {
        console.log(`I can teach at ${this.institute}`);
    }
}

class Artist extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.kind = "Actor"
    }

    
    createArt() {
        console.log(`I am an ${this.kind}`);
    }
}

class Cricketer extends Player {
    constructor(name, age, gender) {
        super(name, age, gender);
        this.teamName = "CSK";
    }

    playCricket() {
        console.log(`I play Cricket for ${this.teamName}`)
    }
}