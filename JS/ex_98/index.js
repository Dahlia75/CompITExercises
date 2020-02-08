// Add all the numbers bettwen 0 and 1000 using for statement
// The iteration must break if the partial result is bigger than 400

let numsum = 0;
let lastNum = 1000;

for(let num=0; num<lastNum; num++) {
    numsum += num;
    if (numsum > 400) {
        break;
    } else {
        console.log(numsum);
    }
}