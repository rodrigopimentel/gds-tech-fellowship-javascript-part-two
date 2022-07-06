// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/05

// Coding Challenge: JavaScript Introduction Part 2
// Write a function named min that takes two arguments and returns their minimum.

function min(arg1, arg2) {
    if (arg1 <= arg2) {
        return arg1;
    } else {
        return arg2;
    }
}

arg1 = 5;
console.log(`arg 1: ${arg1}`)
arg2 = 10;
console.log(`arg 2: ${arg2}`)
console.log('calling min()');
console.log(`min() output: ${min(arg1, arg2)}`);