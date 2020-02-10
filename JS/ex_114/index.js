/* Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :) */

function revert(str) {
    let revertString = '';

    let strTolower = str.toLowerCase();
    for(let index=strTolower.length; index > 0; index--){
        revertString += strTolower.charAt(index-1);
    }
    return revertString;
}

console.log(revert('Hello'));
console.log(revert('World'));
console.log(revert("It's so cool"));
console.log(revert('Very nice'));
console.log(revert(revert('Very nice')));