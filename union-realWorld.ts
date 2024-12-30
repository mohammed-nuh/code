function printStatusCode(statusCode: number | string){
    console.log(`Status Code: ${statusCode}`);
}

printStatusCode(200);
printStatusCode("200");

// user active status example

let userStatus: string | boolean;
userStatus = false;
console.log(userStatus);

userStatus = "inactive"
console.log(userStatus);
