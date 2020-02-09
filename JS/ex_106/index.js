/* Define the getUserID function and return the number 50
Define the isUserValid function and return a boolean value
Inside the isUserValid function call the getUserID function to get the 50 value
If the user id is higher than 30 return true, if not return false
Then outside the functions write the following code
If isUserValid then show the following message: User valid
Else show the following message: User not valid */

let message = '';

const getUserID = function() {
    return 50;
};

function isUserValid () {
    return ((getUserID() > 30) ? true : false);
}

(isUserValid()) ? (message = 'User valid') : (message = 'User not valid');
console.log(message);