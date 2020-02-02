// using do-while show the following stars 
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

let index = 13;
let stars = '';
let i = 0;
do {
    for(i=0; i<index; i++){
        stars =stars.concat("*")
    }
    index--;
    console.log(stars);
    stars = '';
} while (index > 0);