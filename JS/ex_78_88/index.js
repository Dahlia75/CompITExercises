//Use do/while structure to only show even numbers between 0 and 100 as output
let num = 0;
do {
    if (!(num%2)) {
        console.log(num);
    }
    num++;
} while (num < 101);

//Use for loop to only show even numbers between 0 and 100 as output
console.log("\n *** Using for loop ***");
for (num=0; num<101; num++) {
        !(num%2) ? console.log(num) : null;
}