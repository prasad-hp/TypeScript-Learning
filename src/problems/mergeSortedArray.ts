function mergeSort(arr1:number[], arr2:number[]):number[]{
    let ans:number[] = arr1.concat(arr2)
    ans.sort()

    return ans;
}

let arr1 = [1,3,5]
let arr2 = [2, 4, 6]
console.log(mergeSort(arr1, arr2))