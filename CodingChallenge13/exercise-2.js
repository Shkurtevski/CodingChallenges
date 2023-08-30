function Cube(sideLength) {
    this.sideLength = sideLength;
}

Cube.prototype.calculateArea = function () {
    return 6 * Math.pow(this.sideLength, 2);
};

Cube.prototype.calculatePerimeter = function () {
    return 12 * this.sideLength;
};

const sideLength = parseFloat(prompt("Enter the size of the sides of the cube:"));
const cube = new Cube(sideLength);
const area = cube.calculateArea();
const perimeter = cube.calculatePerimeter();

console.log("Cube Area:", area);
console.log("Cube Perimeter:", perimeter);