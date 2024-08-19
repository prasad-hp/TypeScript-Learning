function nonRepeatedChar(str:string):string{
    let list: Record<string, number> = {};
    for(let char of str){
        list[char] = (list[char] || 0) + 1
    }
    for(let char of str){
        if(list[char] === 1){
            return `non repeating first char is ${char}` 
        }     
    }
    return "there is no non repeating character in string"
}
console.log(nonRepeatedChar("agavvddfesesf"))