type student = {
    name: string;
    rno: number;
};

type className = {
    grade: number;
    section: string;
};

type student_className = student & className;

let student_className = {
    name: "John",
    rno: 1,
    grade: 10,
    section: "A"
}

console.log(student_className);
console.log(student_className.grade);