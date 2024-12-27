function greetOptional(userName, greeting, additionalMsg) {
    if (greeting && additionalMsg) {
        console.log("".concat(greeting, " ").concat(userName, ", ").concat(additionalMsg));
    }
    else if (greeting) {
        console.log("".concat(greeting, " ").concat(userName, "!"));
    }
    else {
        console.log(userName);
    }
}
greetOptional("Nuh");
greetOptional("Nuh", "Hey");
greetOptional("Nuh", "Hi", "Welcome to the world of programming");
