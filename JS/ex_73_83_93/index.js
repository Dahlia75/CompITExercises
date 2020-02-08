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

let count = 13;
let index = 0;
let stars = '';
while (count > 0) {
    while(index < count){
        stars += "*";
        index++;
    }
    console.log(stars);
    index = 0;
    count--;
    stars = '';
}

console.log("\n *** Using do/while ***");
count = 13;
do {
    index = 0;
    stars = '';
    while(index < count){
        stars += "*";
        index++;
    }
    console.log(stars);
    count--;
} while (count > 0);

console.log("\n *** Using for loop ***");
for(count=13; count > 0; count--) {
    stars = '';
    for(index=0; index < count; index++){
        stars =stars.concat("*")
    }
    console.log(stars);
}
