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
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    

    play() {
        console.log(`I am a ${this.sportsName} player`);
    }
}

class Teacher extends Person{
    constructor(name, age, gender, institute) {
        super(name, age, gender);
        this.institute = institute;
    }

    
    teach() {
        console.log(`I can teach at ${this.institute}`);
    }
}

class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }

    
    createArt() {
        console.log(`I am an ${this.kind}`);
    }
}

class Cricketer extends Player {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender, sportsName);
        this.teamName = teamName;
    }

    playCricket() {
        console.log(`I play Cricket for ${this.teamName}`)
    }
}