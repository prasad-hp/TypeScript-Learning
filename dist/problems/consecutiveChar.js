"use strict";
function maxPower(s) {
    let power = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let temp = s.slice(i, j);
            let count = true;
            for (let k = 1; k < temp.length; k++) {
                if (temp[0] !== temp[k]) {
                    count = false;
                }
            }
            if (count) {
                power = Math.max(power, temp.length);
            }
        }
    }
    return power;
}
;
console.log(maxPower("abbcccddddeedeeedcba"));
