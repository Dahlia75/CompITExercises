/* Define the function getShapePerimiter that accepts 2 parameters: base and height
If base and height are equal then calculate the perimeter of a square
If base and height are not equal then calculate the perimeter of a rectangle
This function returns a number that represents the shape perimiter
Show the following output: %perimiter% is the shape perimiter
If the perimeter is bigger than 100 then show the following output: The perimiter is to big
Else show the following message: The perimiter is fine
Call this function a couple of times with different values */

const getShapePerimiter =  function (base, height) { 
    return (base == height) ? (base * 4) : ((base + height) * 2);
};

let perimeter = getShapePerimiter(2, 10);  
console.log(`%s is the shape perimiter`, perimeter);
if (perimeter > 100) {
    console.log("The perimiter is to big");
} else {
    console.log("The perimiter is fine");
};