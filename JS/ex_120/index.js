/* Define a students variable and assign an empty array
Assing students values in the following indexes: 0, 1, 2, 3, 4 and 5
Show the index number and value as otput:
index 0: Marta */
let students = [];
for(let i = 0; i<5; i++){
    students[i] = 'student' + i;
    console.log('index %s: %s', i, students[i]);
}
