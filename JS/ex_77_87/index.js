// Use do/while structure to show numbers between 100 and 0 as output
let num = 100;

do {
    console.log(num);
    num--;
} while (num>-1);

console.log("\n *** Using for loop ***");
for (num=100; num>-1; num--) {
    console.log(num);
}