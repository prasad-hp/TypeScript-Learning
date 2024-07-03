interface User{
    firstName : string,
    lastName : string,
    age : number
}

function greet(user:User): string{
    if(user.age > 18) {
        return `${user.firstName}You are an adult`
    } else {
        return `${user.lastName}You are a child`
    }
}  
console.log(greet({
    firstName:"Prasad",
    lastName:"Hp",
    age: 25
}))