function stockProfit(arr:number[]){
    let maxProfit = 0
    let minNum = arr[0]
    for(let i = 0; i < arr.length; i++){
        minNum = Math.min(minNum, arr[i])
        maxProfit = Math.max(maxProfit, arr[i]- minNum)
    }
    console.log(maxProfit)
}

stockProfit([4,3,2,1])
