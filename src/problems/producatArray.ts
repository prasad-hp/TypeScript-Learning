//Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. 

function prodArray(arr:number[]):number[]{
    let ans: number[] = []

    for(let i = 0; i < arr.length; i++){
        let temp = 1
        for(let j = 0; j < arr.length; j++){
                temp = temp * (i === j ? 1 : arr[j])

        }
        ans.push(temp)
    }
    return ans
}

console.log(prodArray([10, 3, 5, 6, 2]))
