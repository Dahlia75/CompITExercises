// Use do/while structure to sum numbers between 0 and 1000

let num = 0;
let numsum = 0;

do {
    numsum += num;
    console.log(numsum);
    num++;
} while (num<1001);


console.log("\n *** Using for loop ***");
numsum = 0;

for(num=0; num<1001; num++) {
    numsum += num;
    console.log(numsum);
}