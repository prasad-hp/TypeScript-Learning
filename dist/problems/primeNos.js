"use strict";
//find the prime nos below 100;
const primeNos = [];
function findPrimeNumbers(num) {
    for (let i = 2; i < num; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNos.push(i);
        }
    }
    console.log(primeNos);
}
findPrimeNumbers(100);
//# sourceMappingURL=primeNos.js.map