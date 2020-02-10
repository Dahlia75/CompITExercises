/* Define a getLongerText that accepts two string values
This function returns the longer text
After calling the function show the longer word as output
Call this function 3 times with different words */

const getLongerText = function (str1, str2) {
    return (str1.length > str2.length) ? str1 : str2;
}

console.log(getLongerText('Dahlia', 'Abdualkareem'));
console.log(getLongerText('Very nice', 'bad'));
