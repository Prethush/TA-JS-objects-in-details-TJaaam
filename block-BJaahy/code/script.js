class Square {
    constructor(side) {
        this.width = side;
        this.height = side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height} `);
    }
    calcArea() {
        return this.height * this.width;
    }

    get area() {
        return this.height * this.width;
    }

    set area(sqArea) {
        if(IsInteger(Math.sqrt(sqArea))) {
            this.height = Math.sqrt(isArea);
            this.width = Math.sqrt(isArea);
        } else {
            alert(`Not a valid Input`);
        }
    }

    static isEqual(sqr1 = {height: 6, width: 6}, sqr2 = {height: 8, width: 8}) {
        return sqr1.height * sqr1.width === sqr2.height * sqr2.width;
    }
}