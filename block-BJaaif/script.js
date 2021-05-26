//Object litereal

function makePerson(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;

    return obj;
}


//Object.create

let personStore = Object.create({});
personStore.greet = function() {
    console.log(`Hello`);
}


function personFromPersonStore(name, age) {

    let person = Object.create(personStore);
    console.log(person);
    person.age = age;
    person.name = name;

    return person;
}

personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`)
}

function PersonConstructor() {

    this.greet = function() {
        console.log("Hello");
    }
}

function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}