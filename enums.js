var statusCode;
(function (statusCode) {
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
})(statusCode || (statusCode = {}));
function handleResponse(code) {
    switch (code) {
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
