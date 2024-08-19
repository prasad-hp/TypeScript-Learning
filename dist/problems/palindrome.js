"use strict";
function palindrome(str) {
    let reversed = str.split("").reverse().join("");
    if (str === reversed) {
        return true;
    }
    else
        return false;
}
console.log(palindrome("asdfdsa"));
