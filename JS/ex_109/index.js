/* Define a validateUser function that accepts the following parameters: username and password
This function returns true or false if username and password match any of the following values:
username: nacho, password: Nerd1979
username: pedro, password: Batman0217
username: marta, password: Mother2312
Show the following output if username and password belong to a user: Welcome %username%, nice to see you again
Show the following output if username and password don't belong to a user: Please input valid credentials
Try calling the validateUser with valid credentials and also with invalid ones */

let validateUser = function(username, password){
    let users = ['nacho', 'pedro', 'marta'];
    let pass = ['Nerd1979', 'Batman0217', 'Mother2312'];

    (users.includes(username) && pass.includes(password)) ? console.log(`Welcome ${username}, nice to see you again`) : console.log('Please input valid credentials');
};

validateUser('nacho', 'Nerd1979');
validateUser('nacho', 'Batman0217');
validateUser('nacho', 'wrongpass');
validateUser('dahlia', 'Nerd1979');

/*****************************Check the password for the specific user*************************/
console.log('\n*********Check the password for the specific user**********\n');

let validateUser2 = function(username, password){
    let users = ['nacho', 'pedro', 'marta'];
    let pass = ['Nerd1979', 'Batman0217', 'Mother2312'];
    let foundUserIndex = users.indexOf(username);
    let foundPass = '';
    if (users.includes(username)) {
        foundPass = pass[foundUserIndex];
    }
    
    (users.includes(username) && (foundPass == password)) ? console.log(`Welcome ${username}, nice to see you again`) : console.log('Please input valid credentials');
};

validateUser2('nacho', 'Nerd1979');
validateUser2('nacho', 'Batman0217');
validateUser2('nacho', 'wrongpass');
validateUser2('dahlia', 'Nerd1979');
