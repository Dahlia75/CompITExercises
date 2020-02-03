/*String slice*/
let playerName = "Patrik Laine is lame";
let tesms = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";

let firstText = playerName.slice(0, 12);
let secondText = tesms.slice(46, 50);
let thirdText = message.slice(9, 21);
let fourthText = message.slice(34, 39);

secondText = secondText.charAt(0).toUpperCase() + secondText.substring(1);
let tempText = firstText.toUpperCase().concat(' ', thirdText, secondText, ' player', fourthText, secondText, '!!');
console.log(tempText);