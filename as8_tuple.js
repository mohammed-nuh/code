function displayStudentInfo(student) {
    if (student[2] === true) {
        console.log("".concat(student[0], " is ").concat(student[1], " years old and is enrolled."));
    }
    else {
        console.log("".concat(student[0], " is ").concat(student[1], " years old and is not enrolled."));
    }
}
var student = ["Nuh", 18, false];
displayStudentInfo(student);
