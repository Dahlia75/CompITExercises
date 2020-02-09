//Define a evenNumbers variable and assign a function as value
// When executed the evenNumbers function will print even numbers between 0 and 100 as output
// Execute this function 5 times

const evenNumbers = function() {
    let num = 0;
    while (num < 101) {
        if (!(num%2)) {
            console.log(num);
        }
        num++;
    }
}

evenNumbers();
evenNumbers();
