"use strict";
// Maximum Subarray Sum – Kadane’s Algorithm
// Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 
function maxSubArray(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = [];
        for (let j = i + 1; j <= nums.length; j++) {
            temp = nums.slice(i, j);
            let sum = 0;
            for (let k = 0; k < temp.length; k++) {
                sum = sum + temp[k];
            }
            ans = Math.max(ans, sum);
        }
    }
    return ans;
}
console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, 0]));
