// Define a user variable and assign a literal object with the following properties:
// property: username, value: null
// property: password, value: null
// method: greet
// method: updatePassword
// method: updaterUsername
// The greet method shows the following message as output if username property is not null
// Hello, I'm user %username%
// Else show the following output:
// Please assign a username value
// The updaterUsername accepts a string value as parameter
// This method will set the username property value
// You need to assign the parameter value to the username property
// The updatePassword accepts a string value as parameter
// This method will set the password property value
// You need to assign the parameter value to the password property
// Call the greet method (username and password are null at this point)
// Call updaterUsername passing a username value as string
// Call updatePassword passing a password value as string
// Call the greet method again (you should see the expected output)

const user = {
    username: '',
    password: '',
    greet: function(){
        if (this.username != ''){
                return console.log("Hello, I'm user %s", this.username);
        } else {
                return console.log("Please assign a username value");
        } 
    },
    updaterUsername: function(userName){
        this.username = userName;
    },
    updatePassword: function(passWord){
        this.password = passWord;
    }
};
user.greet();
user.updaterUsername("Dahlia");
user.updatePassword("123@work");
user.greet();