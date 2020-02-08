// using while show the following stars 
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************

let stars = '';
let lastCount = 13;
while (stars.length < lastCount) {
    stars += '*';
    //stars = stars.concat("*");
    console.log(stars);
} ;