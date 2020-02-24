// Copy and paste the code from the previous exercise
// Refactor the code to match the requirements
// The shouldOpenBatCave function not longer accepts two parameters
// Now the shouldOpenBatCave function only accepts a user parameter
// Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
// The rest of the code should still work the same way and show the proper output

const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
    shouldOpenBatCave: function(username){
        if (username == "batman" && this.password == "Alfred1960ROCKS!"){
                return true;
            } else {
                return false;
            } 
    }
};
console.log(user.shouldOpenBatCave("batman"));

console.log(user.shouldOpenBatCave(user.username));