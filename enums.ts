enum statusCode {
    OK = 200,
    NotFound = 404
}

function handleResponse(code: statusCode){
    switch(code){
        case statusCode.OK:
            console.log("Request was succesful");
            break;
        case statusCode.NotFound:
            console.log("Resource not found");
            break;
        default:
            console.log("Unhandled request");
            break;
    }
}

handleResponse(200);