/* Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd */

const evenFunc = function (num) {
    (num%2) ? console.log(`${num} is odd`) : console.log(`${num} is even`);
    return (num%2) ? false : true;
}

evenFunc(2);
evenFunc(5);
evenFunc(3);
evenFunc(24);
evenFunc(12);

