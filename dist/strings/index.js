"use strict";
const message = "Hello World";
const another = new String("Hello World with string  ");
console.log("Accesing string like array", message[1]);
console.log("assessing string like object", another.charAt(1));
console.log("finding the length", message.length);
console.log("checking includes", another.includes("World"));
console.log("checking includes", another.includes("world"));
console.log("Replacing", message.replace("Hello", "hi"));
console.log(message);
console.log("Trim at both ends", another.trim());
