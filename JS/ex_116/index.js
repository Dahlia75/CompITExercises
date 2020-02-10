/* Define the getHexaColor function that accepts one of the following web colors as parameter:
white
black
blue
green
yellow
pink
This function returns the hexa color for the given parameter color:
param: white, return value: #FFFFFF
param: black, return value: #000000
param: blue, return value: #0b24fb
param: green, return value: #0e7e12
param: yellow, return value: #fffd38
param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output */

const getHexaColor = function(color){
    let colorHexa = '';
    switch (color) {
        case  'white':
            colorHexa = '#FFFFFF';
            break;
        case  'black':
            colorHexa = '#000000';
            break;
        case  'blue':
            colorHexa = '#0b24fb';
            break;
        case  'green':
            colorHexa = '#0e7e12';
            break;
        case  'yellow':
            colorHexa = '#fffd38';
            break;
        case  'pink':
            colorHexa = '#fec1cc';
            break;
        default :
            colorHexa = 'No Hexa for this color';
    }
    return colorHexa;
}

let colorEntry = 'pink';
console.log("The Hexa for %s = %s", colorEntry, getHexaColor(colorEntry));

colorEntry = 'red';
console.log("The Hexa for %s = %s", colorEntry, getHexaColor(colorEntry));