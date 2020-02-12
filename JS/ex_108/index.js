/* Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true */

function sortNum(number1, number2, number3) {
    if((typeof(number1)=='number') && (typeof(number2)=='number') && (typeof(number3)=='number')){
        let sortedArr = [number1, number2, number3];
        sortedArr.sort((a,b) => {return a-b;});
        console.log(sortedArr);
    } else {
        console.log('The parameters must be numbers');
    }
}

sortNum(10, 8, 25);

//*****************Sort with chosing the order type (Ascending/Descending order)******************//

function sortNumOrder(number1, number2, number3, highToLow) {
    if((typeof(number1)=='number') && (typeof(number2)=='number') && (typeof(number3)=='number')){
        let sortedArr = [number1, number2, number3];
        (highToLow) ? sortedArr.sort((a,b) => {return a-b;}) : sortedArr.sort((a,b) => {return b-a;});
        console.log(sortedArr);
    } else {
        console.log('The parameters must be numbers');
    }
}

sortNumOrder(10, 8, '25', true);
sortNumOrder(10, 8, 25, false);

function sortNumOrder(number1, number2, number3) {
    let temparr = [number1, number2, number3];
    let temp = 0;
    for (let i = 0 ;i<(temparr.length-1); i++) {
        for (let j = i+1; j < temparr.length; j++){
            if(temparr[i]>temparr[j]){
                temp = temparr[i];
                temparr[i] = temparr[j];
                temparr[j] = temp;
            }
        }
    }
    console.log(temparr);
}

sortNumOrder(10, 12, 9);
