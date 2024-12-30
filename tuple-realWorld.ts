type rollNo_Std = [number, string];
let std1: rollNo_Std = [1, "Alice"];
let std2: rollNo_Std = [2, "Bob"];

console.log(std1);
console.log(std2);

function printApiResponse(ar: ApiResponse){
    console.log(`Status Code: ${ar[0]}, Message: ${ar[1]}`);
}

type ApiResponse = [number, string];
let ar1: ApiResponse = [200, "OK"];
let ar2: ApiResponse = [404, "ERROR"];
printApiResponse(ar1);
printApiResponse(ar2);

type loginResult = [boolean, string];
function validateLogin(name: string, password:string): loginResult{
    if(name === "Nuh" && password === "password"){
        return [true, "Login Successful!"];
    }
    else{
        return [false, "Failed to login!"];
    }
}

let result = validateLogin("Nuh", "password");
console.log(result[1]);