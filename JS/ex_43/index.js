/*String characters position*/

let message = 'game of thrones';
var firstChar, secondChar, thirdChar;
firstChar = message.charAt(0);
secondChar = message.charAt(5);
thirdChar = message.charAt(8);

let result = firstChar.concat(secondChar, thirdChar);
console.log("the final result is: %s", result.toUpperCase())