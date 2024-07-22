function minFlip(pwd: String) {
    let number = 0;
    if(pwd.length % 2 !== 0) {
        pwd = pwd + "0";
    }
    for(let i = 0; i < pwd.length; i += 2){
        if(pwd[i] !== pwd[i+1]){
            number++
        }
    }
    return number
}


const pwd = "0101011"
console.log(minFlip(pwd))