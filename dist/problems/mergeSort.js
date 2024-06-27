"use strict";
// Sort the array using merge sort
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const first = array.slice(0, middle);
    const last = array.slice(middle);
    return merge(mergeSort(first), mergeSort(last));
}
function merge(first, last) {
    const newArry = [];
    let firstIndex = 0;
    let lastIndex = 0;
    while (firstIndex < first.length && lastIndex < last.length) {
        if (first[firstIndex] < last[lastIndex]) {
            newArry.push(first[firstIndex]);
            firstIndex++;
        }
        else if (last[lastIndex] < first[firstIndex]) {
            newArry.push(last[lastIndex]);
            lastIndex++;
        }
    }
    return newArry.concat(first.slice(firstIndex), last.slice(lastIndex));
}
const output = mergeSort([5, 8, 1, 36, 12, 92, 4]);
console.log(output);
//# sourceMappingURL=mergeSort.js.map