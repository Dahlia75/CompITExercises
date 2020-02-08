//Multiplication using while
let index = 1;
let num = 9;
let lastNum = 12;
let multiplication = 0;
while(index <= lastNum){
    multiplication = num * index;
    console.log('%s multply %s = %s', num, index, multiplication);
    index++;
}