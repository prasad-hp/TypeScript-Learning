function findDuplicate(arr:number[]):number[]{
    let temp: number[] = [];
    let repeates : number[] = []
    if(arr.length < 2){
        return repeates
    }
    for(let i = 0; i < arr.length; i++){
        for(let j =  0; j < temp.length; j++){
            if(temp[j] === arr[i] && !repeates.includes(arr[i])){
                repeates.push(arr[i])
            }
        }
        temp.push(arr[i])
    }
    return repeates
}
console.log((findDuplicate([1,5,2,1,1,4,2,7])))