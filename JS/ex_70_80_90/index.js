//Use while structure to only sum odd numbers between 0 and 1000
let num = 0;
let numsum = 0;
while (num<1001) {
    if (num%2){
        numsum += num;
        console.log('num= %s, sum= %s', num, numsum);
    }
    num++;
}

//Use do/while structure to only sum odd numbers between 0 and 1000
console.log("\n *** Using do/while ***");
num = 0;
numsum = 0;
do {
    if (num%2){
        numsum += num;
        console.log('num= %s, sum= %s', num, numsum);
    }
    num++;
} while (num<1001);

//Use for loop structure to only sum odd numbers between 0 and 1000
console.log("\n *** Using for loop ***");
numsum = 0;
for(num=0; num<1001; num++) {
    if (num%2){
        numsum += num;
        console.log('num= %s, sum= %s', num, numsum);
    }
}