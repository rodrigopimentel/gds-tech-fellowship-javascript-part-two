// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/05

// Coding Challenge: JavaScript Introduction Part 2
// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


function isValidMonthNum(myMonthNum) {
    if (myMonthNum >= 1 && myMonthNum <= 12) {
        return true;
    } else {
        return false;
    }
}

 function numToMonth(myMonthNum) {
    const myMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return myMonths[myMonthNum - 1]
 }

 function prgm() {
    let userMonthNum = window.prompt('Enter a number (1-12) to get the corresponding month');
    console.log(userMonthNum);
    if (isValidMonthNum(userMonthNum)) {
        return numToMonth(userMonthNum);
    } else {
        console.log('Invalid Number! Enter an integer from 1-12.');
        return prgm();
    }
 }

 console.log(prgm());