//Given an array A[] of n numbers and another number x, the task is to check whether or not there exist two elements in A[] whose sum is exactly x. 

function twoSum(arr:number[], x:number):boolean{
    let ans = false
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let sum = i+j
            if(sum === x){
                ans = true
            }
        }
    }
    return ans
}
console.log(twoSum([1,2,5,4,3], 10))