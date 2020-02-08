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

console.log("\n *** Using do/while ***");
stars = '';
do {
    stars += '*';
    console.log(stars);
} while(stars.length < lastCount);

console.log("\n *** Using for loop ***");
stars = '';
for(let i=0; stars.length <= lastCount; i++){
    stars += '*';
    console.log(stars);
}