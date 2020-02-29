const greet = (firstName, lastName, callBack) => {
    console.log(`Hi ${firstName} ${lastName}`);
    if(typeof callBack !== 'function') 
        throw "can't run give me a function";
    callBack();
}
module.exports = greet;