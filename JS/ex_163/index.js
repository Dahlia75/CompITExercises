// Define a add function
// This function will return a numeric value with result of adding all the numbers that we pass as parameter
// As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
// Call the add function passing 5 numbers and show the result as output
// Call the add function passing 10 numbers and show the result as output

add = function (){
    let result = 0;
    for ( let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
};

console.log(add(10,2,5,7,8));
console.log(add(10, 2, 5, 7, 8, 15, 20, 78, 12, 8));

add = function (){
    let parameters = [];
    for ( let i = 0; i < arguments.length; i++){
        parameters.push(arguments[i]);
    }
    return parameters;
};

console.log('The result using Reduce is : ', add(10,2,5,7,8).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}));
console.log('The result using Reduce is : ', add(10, 2, 5, 7, 8, 15, 20, 78, 12, 8).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}));