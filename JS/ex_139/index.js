// Define a numbers array with values between 1000 and 1
// Iterate over the numbers array and filter the following values creating new arrays for each type:
// Even numbers
// Odd numbers
// Show the last 10 odd numbers as output
// Show the first 20 even numbers as output
let numbers = [];
let evenNums = [];
let oddNums = [];

for(let num=0; num<1000; num++) {
    numbers.push(num+1);
}
console.log(numbers);
// for (number in numbers){
//     if(number%2) {
//         oddNums.push(number);
//     } else {
//         evenNums.push(number);
//     }
// }
evenNums = numbers.filter(function(number) {
    return !(number%2);
  });

oddNums = numbers.filter(function(number) {
return number%2;
});

console.log('First 20 numbers are: ', evenNums.slice(0,20));
console.log('The last 10 odd numbers are: ', oddNums.slice(-10));
