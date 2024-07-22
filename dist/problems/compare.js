"use strict";
function arrayChallenge(arr) {
    let ans = [];
    ans.push(0);
    for (let i = 1; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                counter = counter - (arr[j] - arr[i]);
            }
            if (arr[j] < arr[i]) {
                counter = counter + (arr[i] - arr[j]);
            }
        }
        ans.push(counter);
    }
    return ans;
}
let arr = [2, 1, 3];
console.log(arrayChallenge(arr));
