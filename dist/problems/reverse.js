"use strict";
function reverse(str) {
    let reversed = str.split("").reverse().join("");
    return reversed;
}
console.log(reverse("hello"));
