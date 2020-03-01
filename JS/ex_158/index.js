// Define a budget variable
// Add all PS4 games price and assign it to the budget variable
// Show the following message as output:
// I need %budget% CAD to get all this PS$ great games!!
// Define a new gameNames array and assign all the games names (all strings)
// Define a new gamePrices array and assign all the games prices (all numbers)
// Show the gameNames items as output
// Show the gamePrices items as output

let consoleValue = 'PS4';
let budget = 0;
let gameNames = [];
let gamePrices = [];

let games = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {    
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {    
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {   
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    },
    {      
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX',
        showDetail: function (){
            console.log(`
            name: ${this.name}
            price: ${this.price}
            sold: ${this.sold}
            console: ${this.console}
           `)
        }
    }
]

filterdGames = games.filter(game => {
    return game.console === consoleValue;
});

let gamesPriceList = filterdGames.map(game => {
        return game.price;
});

budget = gamesPriceList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

gameNames = games.map(game => {
    return game.name;
});

gamePrices = games.map(game => {
    return game.price;
});

console.log(`\nI need ${budget} CAD to get all this ${consoleValue} great games!!`);
console.log(`\nThe games names list are: \n${gameNames}`);
console.log(`\nThe games prices list are: \n${gamePrices}\n`);
