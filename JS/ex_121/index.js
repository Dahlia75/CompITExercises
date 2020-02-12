/* Define a games variable and assign the following values:
Grand Theft Auto V
The Last of Us Remastered
Persona 5
Metal Gear Solid V
Uncharted 4
Journey
Bloodborne
The Witcher 3
Diablo III
Replace the games value Grand Theft Auto V by FIFA 18
Replace the games value Metal Gear Solid by FIFA 17
Replace the games value Persona 5 by FIFA 16
Show the updated games array as output */
let games = [
    'Grand Theft Auto V',
    'The Last of Us Remastered',
    'Persona 5',
    'Metal Gear Solid V',
    'Uncharted 4',
    'Journey',
    'Bloodborne',
    'The Witcher 3',
    'Diablo III'
];

games[0] = 'FIFA 18';
games[3] = 'FIFA 17';
games[2] = 'FIFA 16';

for (let i = 0; i < games.length; i++){
    console.log(games[i]);
}
