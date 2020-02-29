// Define a arithmetic variable and assing a literal value with the following methods:
// add
// subtract
// multiply
// divide
// remainder
// Each method accepts 2 numeric parameters and shows the operation result
// So, add will add both numbers together and log the result (the rest of the methods work in the same way)
// Show an error if the parameters values are not numbers
// Call the methods:
// add(2, 10)
// subtract(10, 5)
// multiply(3, 100)
// divide(40, 2)
// remainder(20, 2)

let arithmetic = {
    add: function(a, b){
        if((typeof(a) === "number") && (typeof(b) === "number")) {
            console.log(`The result of adding ${a} and ${b} is ${a + b}`);
        } else {
            console.log("Please use numeric parameters");
        }
    },
    subtract: function(a, b){
        if((typeof(a) === "number") && (typeof(b) === "number")) {
            console.log(`The result of subtract ${b} from ${a} is ${a - b}`);
        } else {
            console.log("Please use numeric parameters");
        }
    },
    multiply: function(a, b){
        if((typeof(a) === "number") && (typeof(b) === "number")) {
            console.log(`The result of multiplying ${a} and ${b} is ${a * b}`);
        } else {
            console.log("Please use numeric parameters");
        }
    },
    divide: function(a, b){
        if((typeof(a) === "number") && (typeof(b) === "number")) {
            console.log(`The result of dividing ${a} by ${b} is ${a / b}`);
        } else {
            console.log("Please use numeric parameters");
        }
    },
    remainder: function(a, b){
        if((typeof(a) === "number") && (typeof(b) === "number")) {
            console.log(`The result of remainder ${a} and ${b} is ${a % b}`);
        } else {
            console.log("Please use numeric parameters");
        }
    }
};

arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 't');