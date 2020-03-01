let games = [
    {
        name: 'Crash Bandicoot N. Sane Trilogy',
        price: 1060,
        sold: 20,
        console: 'PS4'
    },
    {    
        name: 'Lego Marvel Super Heroes',
        price: 700,
        sold: 25,
        console: 'XBOX'
    },
    {    
        name: 'Gta V',
        price: 1449,
        sold: 30,
        console: 'PS4'
    },
    {   
        name: 'Mortal Kombat Xl',
        price: 1190,
        sold: 34,
        console: 'PS4'
    },
    {      
        name: 'Gta V',
        price: 1250,
        sold: 60,
        console: 'XBOX'
    },
    {      
        name: 'Fifa 2017',
        price: 890,
        sold: 15,
        console: 'PS4'
    },
    {      
        name: 'Uncharted 4',
        price: 950,
        sold: 30,
        console: 'PS4'
    },
    {      
        name: 'Mortal Kombat Xl',
        price: 940,
        sold: 30,
        console: 'XBOX'
    },
    {      
        name: 'Need For Speed',
        price: 790,
        sold: 10,
        console: 'PS4'
    },
    {      
        name: 'Lego Batman',
        price: 1000,
        sold: 18,
        console: 'PS4'
    },
    {      
        name: 'Fifa 17',
        price: 1290,
        sold: 12,
        console: 'PS4'
    },
    {      
        name: 'Resident Evil 7',
        price: 1390,
        sold: 10,
        console: 'PS4'
    },
    {      
        name: 'Dragon Ball XX',
        price: 1390,
        sold: 25,
        console: 'XBOX'
    }
]

games.forEach(game => {
    console.log(`
    name: ${game.name}
    price: ${game.price}
    sold: ${game.sold}
    console: ${game.console}
   `)
})