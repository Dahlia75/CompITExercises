//Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers

let numsum = 0;
let count = 1;
let lastNum = 1000;
let lastCount = 20;

for(let num=0; num<lastNum; num +=2) {
    numsum += num;
    if (count > lastCount) {
        break;
    } else {
        console.log(numsum);
    }
    count ++
}