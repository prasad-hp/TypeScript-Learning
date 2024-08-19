function reverse(str:string):string{
    let reversed = str.split("").reverse().join("")
    return reversed
}

console.log(reverse("hello"))