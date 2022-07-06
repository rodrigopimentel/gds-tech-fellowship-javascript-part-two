// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/05

// Coding Challenge: JavaScript Introduction Part 2
// EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

let myStudents = [['Anna', 'Baker', 24], ['John', 'Doe', 19], ['Carl', 'Watson', 21]];
console.log(`Hello, my name is ${myStudents[1][0]} ${myStudents[1][1]} and I'm ${myStudents[1][2]} years old.`);