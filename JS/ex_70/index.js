let num = 0;
let numsum = 0;
while (num<1001) {
    if (num%2){
        numsum += num;
        console.log('num= %s, sum= %s', num, numsum);
    }
    num++;
}