let text = 'HELLO';
let result = '';
let index = text.length - 1 
do{
    result = result.concat(text.charAt(index));
    index--;
}while (index >= 0);
console.log("the final result is:  %s", result.toLowerCase())