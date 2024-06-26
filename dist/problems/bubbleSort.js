"use strict";
function sort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    console.log(numbers);
}
sort([4, 8, 2, 71, 0, 4, 9]);
//# sourceMappingURL=bubbleSort.js.map