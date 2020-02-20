// Define a tripExpenses array with the following values:
// The first item is hotel fee, it's a number, type a value that you like
// The second item is trip fee, it's a number, type a value that you like
// The third item is meals fee, it's a number, type a value that you like
// Define a budget variable and assign the sum of all the tripExpenses using reduce
// Show the tripExpenses items as output with the following format:
// hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
// Show the final budget items as output with the following format
// Total trip budget: %budget%

let tripExpenses = [600, 1000, 200];
let budget = tripExpenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);