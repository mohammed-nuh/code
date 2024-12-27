class Employee {
    private name;
    private age;
    private salary;

    constructor(name: string, age: number, salary: number){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public printInfo(): void{
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}

let emp = new Employee("John", 30, 5000);
emp.printInfo();