//find the prime nos below 100;
const primeNos:number[] = []
function findPrimeNumbers(num:number){
    for(let i:number = 2; i<num; i++){
        let isPrime:boolean = true
        for(let j:number = 2; j*j <= i; j++){
            if(i % j === 0){
                isPrime = false
                break
            }
        }
        if(isPrime){
            primeNos.push(i)
        }
    }
    console.log(primeNos)
}

findPrimeNumbers(100)