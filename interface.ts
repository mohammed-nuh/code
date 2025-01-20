interface Animal {
    name: string;
    color: string;
    age: number;

    eat(): void;
}

class Cat implements Animal {
    name: string;
    color: string;
    age: number;

    constructor(name: string, color: string, age: number){
        this.name = name;
        this.color = color;
        this.age = age;
    }

    eat(): void {
        console.log(`${this.name} is eating...`);
    }
}

let cat1: Animal = new Cat("Tom", "Blue", 5);
console.log(cat1.name);
cat1.eat(); 