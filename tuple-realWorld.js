var std1 = [1, "Alice"];
var std2 = [2, "Bob"];
console.log(std1);
console.log(std2);
function printApiResponse(ar) {
    console.log("Status Code: ".concat(ar[0], ", Message: ").concat(ar[1]));
}
var ar1 = [200, "OK"];
var ar2 = [404, "ERROR"];
printApiResponse(ar1);
printApiResponse(ar2);
function validateLogin(name, password) {
    if (name === "Nuh" && password === "password") {
        return [true, "Login Successful!"];
    }
    else {
        return [false, "Failed to login!"];
    }
}
var result = validateLogin("Nuh", "password");
console.log(result[1]);
