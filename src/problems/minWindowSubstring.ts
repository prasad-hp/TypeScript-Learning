function minWindow(s: string, t: string): string {
    let ans: string = ""
    let len:number = s.length
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j <= s.length; j++){
            let temp = s.slice(i, j)
            let exists = true
            console.log(temp)
            for(let k = 0; k < t.length; k++){
                for(let l = 0; k < temp.length; l++){
                    if(t[l] !== temp[k]){
                        exists = false
                    }
                }
            }
            if(exists){
                len = Math.min(len, temp.length)
                console.log(temp)
            }
            if(len === temp.length){
                ans = temp
            }
        }
    }
    return ans
}
console.log(minWindow("ADOBECODEBANC", "ABC"))