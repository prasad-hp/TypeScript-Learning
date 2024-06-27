// Sort the array using merge sort

function mergeSort(array:number[]):number[]{

    if(array.length <= 1 ){
        return array
    }
    const middle: number = Math.floor(array.length / 2);
    const first: number[] = array.slice(0, middle);
    const last: number[] = array.slice(middle);

    return merge(mergeSort(first), mergeSort(last))
}

function merge(first:number[], last:number[]):number[]{
    const newArry = [];
    let firstIndex:number = 0;
    let lastIndex:number = 0;
    while(firstIndex < first.length && lastIndex < last.length){
        if(first[firstIndex] < last[lastIndex]){
            newArry.push(first[firstIndex])
            firstIndex++
        }else if (last[lastIndex] < first[firstIndex]){
            newArry.push(last[lastIndex])
            lastIndex++
        }
    }
    return newArry.concat(first.slice(firstIndex),last.slice(lastIndex))
}

const output:number[] = mergeSort([5,8,1,36,12,92,4])
console.log(output)