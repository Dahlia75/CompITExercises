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
// Iterate over the mutants array
// Add <3 symbol before the mutant name if the iterated name is one of the following:
// Professor X
// Logan
// Phoenix
// Gambit
// Show the original mutant array items as output
// Show the updated mutant array items as output

const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

const updatedMutants = mutants.map((mutant) => {
    if(['Professor X','Logan', 'Phoenix', 'Gambit'].includes(mutant)){
        mutant = '<3' + mutant;
    }
    return mutant;
}); 

console.log(mutants);
console.log(updatedMutants);
