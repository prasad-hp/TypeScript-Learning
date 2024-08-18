function longestString(s:string){
    let maxLen = 0
    if(s.length === 0){
        return maxLen = 0
    }if(s.length === 1){
        return maxLen = 1
    }else{
        for(let i = 0; i < s.length; i++){
            for(let j = 1; j < s.length; j++){
                let str = s.substring(i, j+1)
                let repeates = false;
                for(let k = 0; k < str.length; k++){
                    if(str.lastIndexOf(str[k]) !== str.indexOf(str[k])){
                        repeates = true
                    }
                }
                if(!repeates){
                    maxLen = Math.max(maxLen, str.length)
                }

            }
        }
    }

    console.log(maxLen)
}

longestString("abcdeedbba")