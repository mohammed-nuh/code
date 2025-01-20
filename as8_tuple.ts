type StudentTuple = [string, number, boolean];

function displayStudentInfo(student: StudentTuple): void {
    if(student[2] === true) {
        console.log(`${student[0]} is ${student[1]} years old and is enrolled.`)
    } else {
        console.log(`${student[0]} is ${student[1]} years old and is not enrolled.`)
    }
}

let student: StudentTuple = ["Nuh", 18, false];
displayStudentInfo(student);