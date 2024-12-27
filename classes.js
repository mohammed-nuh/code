var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.printInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Salary: ").concat(this.salary));
    };
    return Employee;
}());
var emp = new Employee("John", 30, 5000);
emp.printInfo();
