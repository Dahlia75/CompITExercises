// Define a greet function using Arrow Function syntax
// This functions accepts 2 parameter
// First parameter is a string that represents a person first name
// Second parameter is a string that represents a person last name
// This functions shows the following message when it's called
// Hi %firstname% %lastname%
// Call the function and pass your first and last name as parameters
// Extra
// Add a third parameter to the greet function
// This parameter is a function that we'll use as callback
// This callback will get executed after greeting the person
// This callback function will show the following output:
// This code gets executed after the greet function call
// Run the script again to see the new feature

const greet = (firstName, lastName, callBack) => {
    console.log(`Hi ${firstName} ${lastName}`);
    if(typeof callBack !== 'function') 
        throw "can't run give me a function";
    callBack();
}

greet('dahlia', 'M Tariq', ()=> console.log("This code gets executed after the greet function call"));
//greet('dahlia', 'M Tariq', "This code gets executed after the greet function call");

const callbackFunction = () => console.log('This code gets executed after the greet function call');

try {
    greet('John', 'Rambo', callbackFunctio)
} 
catch(error){
    console.log("Ohh snap, we have an error: ", error)
}
finally {
    console.log('I`ll run, you like it or not')
}