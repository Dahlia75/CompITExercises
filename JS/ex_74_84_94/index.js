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
}

console.log("\n *** Using do/while ***");
stars = '*';
do {
    console.log(stars);
    stars += '**';
} while(stars.length < lastCount);

console.log("\n *** Using for loop ***");
stars = '*';
for (let i=0; stars.length < lastCount; i++) {
    console.log(stars);
    stars += '**';
}