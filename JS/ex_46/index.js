// The substr method

let userAndPassword = 'pepito2017,12345';
let user = userAndPassword.substr(0,10);
let password = userAndPassword.substr(11);
console.log('The user %s has %s as password', user, password);