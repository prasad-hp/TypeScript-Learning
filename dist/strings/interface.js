"use strict";
function greet(user) {
    if (user.age > 18) {
        return `${user.firstName}You are an adult`;
    }
    else {
        return `${user.lastName}You are a child`;
    }
}
console.log(greet({
    firstName: "Prasad",
    lastName: "Hp",
    age: 25
}));
