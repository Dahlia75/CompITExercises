/* Define the average function that accepts 5 numbers as parameter
Call the average function with the following values: 2, 4, 10, 20, 30
After executing the call show the following message: The average is %average% */

function average  (num1, num2, num3, num4, num5){
    let avrg = (num1 + num2 + num3 + num4 + num5) / 5;
    return avrg;
}

let avrg = average(2, 4, 10, 20, 30);
console.log(`The average is ${avrg}`);