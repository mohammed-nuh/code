class Animal {
    protected name: string;
    protected color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}

class Cat extends Animal {
    public Meow(): void {
        console.log(`${this.name} is meowing!`);
    }
}

let cat1 = new Cat("Tom", "Blue");
cat1.Meow();