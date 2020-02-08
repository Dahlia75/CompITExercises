// Write the code to show numbers bettwen 10000 and 0 using for
// Show all the numbers as output
// Every 10 numbers show the number but with the following format: ** number **

let offset = 10;
let lastNum = 10000;

for(let index=lastNum; index>-1; index --) {
    (index%offset) ? console.log(index) : console.log('** %s **', index);
}