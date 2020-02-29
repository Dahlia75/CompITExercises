// Define a player variable and assign a literal object with the following properties and methods:
// property: name, value: null
// property: energy, value: 100
// property: lives, value: 3
// method: loseEnergy
// method: recoverEnergy
// method: loseLife
// method: recoverLife
// Methods
// The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
// The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
// The loseLife doesn't accept parameters and just subtract one player life every time you call it
// The recoverLife doesn't accept parameters and just adds one player life every time you call it
// Rules
// The player energy can't be negative
// The player energy can't be more than 100
// The player lives can't be bigger thant 99
// If the player energy is equal or lees than 0 then the player will lose a life
// Play Time!!!
// Set the player name
// Player lose a life
// Player lose 10 energy value
// Player lose 5 energy value
// Player lose 15 energy value
// Player lose 20 energy value
// Player earn 10 energy value
// Player lose 30 energy value
// Player lose 40 energy value
// Player lose a life
// Player wins a life
// Player wins a life
// Simulate each game play using the players object methods
// Show the following output after doing all the object methods calls
// The %player name% has %energy% energy % and  %lifes% lifes
var player = {
    name: null,
    energy: 10,
    lives: 3,
    loseEnergy: function (damage){
        if(energy <= 0){
            loseLife();
        } else {
            energy -= damage;
        }
    },
    recoverEnergy: function (energyUp){
        if (energy < 101) {
            energy += energyUp;
        }
    },
    loseLife: function (){
        lives--;
    },
    recoverLife: function (){
        if(lives < 100){
            lives++;
        }
    }
}