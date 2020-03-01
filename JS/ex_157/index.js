// At the beginning of the code define a console variable and assign one of the following values as string: PS4 or XBOX
// Iterate over the games array and filter to show only the ones which console property equals the selected console variable value
// Basically we filter games by PS4 or XBOX using the array filter method

let consoleValue = 'XBOX';
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

// games.filter(game => {
//     if (game.console === consoleValue) {
//         game.showDetail();
//     }
// })

filterdGames = games.filter(game => {
    return game.console === consoleValue;
});

filterdGames.forEach(game => {
    game.showDetail();
});
