"use strict";
function stock(arr, d) {
    let ans = 0;
    // Iterate over all possible triplets (i, j, k) with i < j < k
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const sum = arr[i] + arr[j] + arr[k];
                if (sum % d === 0) {
                    ans++;
                }
            }
        }
    }
    return ans;
}
const d = 5;
let array = [3, 3, 4, 7, 8];
console.log(stock(array, d)); // Output the correct result
