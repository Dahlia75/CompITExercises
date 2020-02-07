let weekdayNumber = 5;
let message = "Today it's ";
switch (weekdayNumber) {
    case 1 :
        message += 'Monday';
        break;
    case 2 :
        message += 'Tuesday';
        break;
    case 3 :
        message += 'Wednesday';
        break;
    case 4 :
        message += 'Thursday';
        break;
    case 5 :
        message += 'Friday';
        break;
    case 6 :
        message += 'Saturday';
        break;
    case 7 :
        message += 'Sunday';
        break;
    default :
        message = 'Error: Please input a number bettwen 1 and 7';                   
}

console.log(message);

weekdayNumber = 8;
//Using if else statement

if (weekdayNumber == 1) {
    message += 'Monday';
} else if (weekdayNumber == 2) {
    message += 'Tuesday';
} else if (weekdayNumber == 3) {
    message += 'Wednesday';
} else if (weekdayNumber == 4) {
    message += 'Thursday';
} else if (weekdayNumber == 5) {
    message += 'Friday';
} else if (weekdayNumber == 6) {
    message += 'Saturday';
} else if (weekdayNumber == 7) {
    message += 'Sunday';
}
else {
    message = 'Error: Please input a number bettwen 1 and 7';                   
}

console.log(message);