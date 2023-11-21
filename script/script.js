// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50; //true
console.log("The sum is =",isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log("The is Two Odd is =",isTwoOdd)
                  

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25; // false
console.log("Over 25 ",isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log("Is Unique ",isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//   Part 2
// Check if all numbers are divisible by 5. Cache the result in a variable
const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log("All numbers divisible by 5: ", isDivisibleBy5);

//  Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log("First number is larger than last: ", isFirstLargerThanLast);
//   
/**
 * Subtract the first number from the second number.
 * Multiply the result by the third number.
 * Find the remainder of dividing the result by the fourth number.
 */
const arithmeticResult = ((n2 - n1) * n3) % n4;
console.log("Result of the arithmetic chain: ", arithmeticResult);
/**Change the way that isOver25 calculates so that we do not need to use the 
 * NOT operator (!) in other logic comparisons. 
 * Rename the variable as appropriate. 
 */
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log("No number larger than 25: ", isUnder25);
/**You are planning a cross-country road trip!
 * The distance of the trip, in total, is 1,500 miles.
 * Your car’s fuel efficiency is as follows:
 * At 55 miles per hour, you get 30 miles per gallon.
 * At 60 miles per hour, you get 28 miles per gallon.
 * At 75 miles per hour, you get 23 miles per gallon.
 * You have a fuel budget of $175.
 * The average cost of fuel is $3 per gallon. */
const totalDistance = 1500;
const fuelCostPerGallon = 3;
const fuelBudget = 175;

/** Function to calculate fuel needs, cost, and travel time
 * Set up a program to answer the following questions:
 * How many gallons of fuel will you need for the entire trip?
 * Will your budget be enough to cover the fuel expense?
 * How long will the trip take, in hours?
 * Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
 * Log the results of your calculations using string concatenation or template literals.
 */

//At 55 miles per hour
const gallonsNeeded55 = totalDistance / 30; // MPG at 55 mph
const totalCost55 = gallonsNeeded55 * fuelCostPerGallon;
const time55 = totalDistance / 55;
const isBudgetEnough55 = totalCost55 <= fuelBudget;

console.log("The gallon needed at 55 mph is :" ,gallonsNeeded55,
"gallons needed, Cost:$",totalCost55, "Time:",time55,
"hours, Budget Enough:",isBudgetEnough55);

//60 MPH
const gallonsNeeded60 = totalDistance / 28; // MPG at 60 mph
const totalCost60 = gallonsNeeded60 * fuelCostPerGallon;
const time60 = totalDistance / 60;
const isBudgetEnough60 = totalCost60 <= fuelBudget;

console.log("At 60 mph: ", gallonsNeeded60,
"gallons needed, Cost:", totalCost60, 
"Time: ", time60, "hours", "Budget Enough:" , isBudgetEnough60);

//&% MPH
const gallonsNeeded75 = totalDistance / 23; // MPG at 75 mph
const totalCost75 = gallonsNeeded75 * fuelCostPerGallon;
const time75 = totalDistance / 75;
const isBudgetEnough75 = totalCost75 <= fuelBudget;

console.log("At 75 mph:", gallonsNeeded75,
"gallons needed, Cost:" , totalCost75,
"Time:" , time75, "hours", "Budget Enough:", isBudgetEnough75);



 
