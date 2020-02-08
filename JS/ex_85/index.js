// Fibonacci Series using do while
let f = 0;
let f1 = -1;
let f2 = 1;
let n = 10;
do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
} while(f<n);

console.log('=====');

// Using for loop
f = 0;
f1 = -1
f2 = 1;
n = 10;
for (let i =0; i<n; i++){
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}

