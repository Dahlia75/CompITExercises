// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output

const fibonacci = function() {
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
}

fibonacci();
fibonacci();
fibonacci();