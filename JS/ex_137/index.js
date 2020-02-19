// Define a numbers array with values between 1 and 1000
// Iterate over each numbers item using map and increment the value in 10
// If value is 1 then it should be 11
// If value is 2 then it should be 12
// and so on..
// Show the following output for each element:
// index: 1, original number: 1, incremented value: 11

let numbers = [];

for(let num=0; num<1000; num++) {
    numbers.push(num+1);
};

const incrementedNumbers = numbers.map((num)=> {
    return (num+10);
});

incrementedNumbers.forEach((number, index)=> {
    console.log("index: %s, original number: , incremented value: %s", index, number);
});