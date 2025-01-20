var Cat = /** @class */ (function () {
    function Cat(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    Cat.prototype.eat = function () {
        console.log("".concat(this.name, " is eating..."));
    };
    return Cat;
}());
var cat1 = new Cat("Tom", "Blue", 5);
console.log(cat1.name);
cat1.eat();
