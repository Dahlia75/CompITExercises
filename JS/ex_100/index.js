//Define a function that will show even numbers from 0 to 100 as output
function evenNumbers() {
    let num = 0;
    while (num < 101) {
        if (!(num%2)) {
            console.log(num);
        }
        num++;
    }
}

evenNumbers();
