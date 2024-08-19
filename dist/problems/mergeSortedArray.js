"use strict";
function mergeSort(arr1, arr2) {
    let ans = arr1.concat(arr2);
    ans.sort();
    return ans;
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(mergeSort(arr1, arr2));
