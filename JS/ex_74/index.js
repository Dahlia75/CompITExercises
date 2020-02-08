// using while show the following stars 
// *
// ***
// *****
// *******
// *********
// ***********
// *************

let stars = '*';
let lastCount = 13;
while (stars.length < lastCount) {
    console.log(stars);
    stars += '**';
    //stars = stars.concat("**");
} ;