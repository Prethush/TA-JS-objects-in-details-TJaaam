//Using functions

function user(name, id, noOfProjects) {
    let obj = {};
    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    obj.getProjects = function() {
        return obj.noOfProjects;
    }

    obj.changeName = function(newName) {
        return obj.name;
    }

    obj.incrementProject = function() {
        return ++obj.noOfProjects;
    }

    obj.decrementProject = function() {
        return --obj.noOfProjects;
    }

    return obj;


}

let obj1 = user("John", 217, 50);
let obj2 = user("Arya", 200, 100);

//Prototypal Pattern

let userMethods = {

    getProjects: function() {
        return this.noOfProjects;
    },

    changeName: function(newName) {
        return this.name;
    },

    incrementProject: function() {
        return ++this.noOfProjects;
    },

    decrementProject: function() {
        return --this.noOfProjects;
    }

}

function user(name, id, noOfProjects) {
    let obj = Object.create(userMethods);

    obj.name = name;
    obj.id = id;
    obj.noOfProjects = noOfProjects;

    return obj;
}


let user1 = user("James", 41, 78);
let user2 = user("Janet", 23, 65);

//Pseudo classical way


function User(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}

User.prototype = {
    getProjects() {
        return this.noOfProjects;
    },

    changeName(newName) {
        return this.name;
    },

    incrementProject() {
        return ++this.noOfProjects;
    },

    decrementProject() {
        return --this.noOfProjects;
    }
}

let user1 = new User("John", 200, 400);
let user2 = new User("Mark", 20, 100);

//Class

class User {
    constructor(name, id, noOfProjects) {
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }

    getProjects() {
        return this.noOfProjects;
    }

    changeName(newName) {
        return this.name;
    }

    incrementProject() {
        return ++this.noOfProjects;
    }

    decrementProject() {
        return --this.noOfProjects;
    }

}

let user1 = new User("John", 200, 400);
let user2 = new User("Mark", 20, 100);
