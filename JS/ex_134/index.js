// Define a numbers array
// Assign values between 1 and 1000
// Iterate over the numbers array and add all numbers items
// On each iteration show the partial result
// 1
// 3
// 6
// ... so on
// If the final result equals 500500 then show the following output: Good job!!!
// Else show: Take a look to see if something is wrong

let numbers = [];
let numSum = 0;

for(let num=0; num<1000; num++) {
    numbers.push(num+1);
    numSum += numbers[num];
    console.log(numSum);
}

if (numSum === 500500) {
    console.log('Good job!!!');
} else {
    console.log('Take a look to see if something is wrong');
}