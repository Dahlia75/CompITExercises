// Fibonacci Series using do while
let f = 0;
let f1 = -1;
let f2 = 1;
let n = 10;
let count = 0;

do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    count++;
} while(count<n);


// Using for loop
console.log("\n *** Using for loop ***");
let x = [0, 1];

console.log(x[0]);
console.log(x[1]);
for (let index=2; index < n; index++){
    (x.length>=3) ? x.push(x[index-1] + x[index-2]) : x.push(x[index-1])
    console.log(x[index]);
}
