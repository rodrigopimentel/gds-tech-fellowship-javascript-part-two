// Rodrigo Pimentel
// GDS Tech Fellowship
// 2022/07/05

// Coding Challenge: JavaScript Introduction Part 2
// MEDIUM: Given the information below for Tom and Jerry. 
// Tom -     height:  9in       mass: 8 g
// Jerry -     height: 10in     mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     BMI = mass / height ^2 = mass / (height * height)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

function calcBMI(height, mass) {
    return (mass) / (height * height);
}

tomHeight = 9;
tomMass = 8;
let tomStats = [tomHeight, tomMass];

jerryHeight = 9;
jerryMass = 45;
let jerryStats = [jerryHeight, jerryMass];

tomBMIHigher = console.log('Is Tom\'s BMI higher than Jerry\'s? ' + (calcBMI(tomStats[0], tomStats[1]) > calcBMI(jerryStats[0], jerryStats[1])));