"use strict";
function arrangeBracket(str) {
    let arr = [];
    for (let char of str) {
        if (char === "[" || char === "(" || char === "{" || char === "}" || char === ")" || char === "]") {
            arr.push(char);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "[" && arr[arr.length - i - 1] !== "]") {
            return "Invalid";
        }
        else if (arr[i] === "{" && arr[arr.length - 1 - i] !== "}") {
            return "Invalid";
        }
        else if (arr[i] === "(" && arr[arr.length - 1 - i] !== ")") {
            return "Invalid";
        }
    }
    return "valid";
}
console.log(arrangeBracket("[({)]"));
