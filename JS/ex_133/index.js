// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// First part
// Iterate over the mutants items
// Show each mutant name
// Break the execution in case Magneto is part of the mutants list
// Second part
// Find out Magneto position and remove it from the mutants array
// Iterate over the array without Magento on it and show each mutant name in upper case and the item position

const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
for (mutant in mutants){
    if (mutants[mutant] == 'Magneto') {
        break;
    } else {
        console.log('mutant %s: ', (parseInt(mutant) +1), mutants[mutant]);        
    }
}

let magnetoIndex = mutants.indexOf('Magneto');
if (magnetoIndex > -1){
    mutants.splice(magnetoIndex,1);
}

console.log('\nThe mutants Array after removing Magneto:')
for (mutant in mutants){
    console.log('mutant %s: ', mutant, mutants[mutant].toUpperCase());        
}

// let mutantsFilttered = mutants.filter(function (ele) {
//         return ele != 'Magneto';
//     });
 
// console.log('\nThe mutants Array after removing Magneto:')
// for (mutant in mutantsFilttered){
//     console.log('mutant %s: ', mutant, mutantsFilttered[mutant].toUpperCase());        
// }