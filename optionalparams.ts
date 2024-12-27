function greetOptional(userName: string, greeting?: string, additionalMsg?: string): void {
    if (greeting && additionalMsg) {
        console.log(`${greeting} ${userName}, ${additionalMsg}`);
    }
    else if (greeting) {
        console.log(`${greeting} ${userName}!`);
    }
    else {
        console.log(userName);
    }
}

greetOptional("Nuh");
greetOptional("Nuh", "Hey");
greetOptional("Nuh", "Hi", "Welcome to the world of programming");
