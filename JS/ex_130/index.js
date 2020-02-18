// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Beast
// Phoenix
// Sort the list
// Reverse the sorted list
// Join all mutants name using the following text: '* '
// Show the following output:
// Original mutants list
// Sorted mutants list
// Reversed mutants list
// Mutants name separated by *
const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix'];
console.log('mutants : ', mutants);

mutants.sort();
console.log('mutants Sorted : ', mutants);

mutants.reverse();
console.log('mutants Reversed : ', mutants);

let mutantsJoin = mutants.join('* ');
console.log('mutantsJoin : ', mutantsJoin);