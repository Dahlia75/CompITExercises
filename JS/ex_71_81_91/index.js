//Multiplication using while
let index = 1;
let num = 9;
let lastNum = 12;
let multiplication = 0;
while(index <= lastNum) {
    multiplication = num * index;
    console.log('%s multply %s = %s', num, index, multiplication);
    index++;
}

//Multiplication using while
console.log("\n *** Using do/while ***");
index = 1;
num = 9;
multiplication = 0;
do {
    multiplication = num * index;
    console.log('%s multply %s = %s', num, index, multiplication);
    index++;
} while(index <= lastNum);

//Multiplication using while
console.log("\n *** Using for loop ***");
multiplication = 0;
for(index = 1; index <= lastNum; index++) {
    multiplication = num * index;
    console.log('%s multply %s = %s', num, index, multiplication);
}