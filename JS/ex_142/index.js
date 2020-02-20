// Define a firstPerson variable
// Define a secondPerson variable
// Assign a new array to each defined variable with the following structure
// The first item is the person first name (string)
// The second item is the person last name (string)
// The third item is the person address (string)
// The fourth item is the person age (number)
// Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
// Compare the strings result to see if they are the same person (if they are they should match)
// Try using the same person (with different variables) and also try different people
let firstPerson = ['Dahlia', 'Abdualkareem', '123 Laurel street', '45'];
let secondPerson = ['Saba', 'Talaat', 'Toronto', '44'];
let thirdPerson = ['Dahlia', 'Abdualkareem', '123 Laurel street', '45'];

let firstString = firstPerson.reduce((accumulator, currentValue)=> {
    return accumulator.concat(currentValue);
});

let secondString = secondPerson.reduce((accumulator, currentValue)=> {
    return accumulator.concat(currentValue);
});

let thirdString = thirdPerson.reduce((accumulator, currentValue)=> {
    return accumulator.concat(currentValue);
});

console.log('firstPerson', firstString);
console.log('secondPerson', secondString);
console.log('thirdPerson', thirdString);

console.log('The first and second person are similar. ', (firstString == secondPerson));console.log('The first and third person are similar. ', (firstString == thirdString));