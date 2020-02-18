// Define a femaleStudents array and assign 5 students
// Define a maleStudents array and assign 5 students
// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// Sort the students list
// Show the following output:
// Each femaleStudents name using numeric indexes
// Each maleStudents name using while
// Each students name using for
let femaleStudents = ['Sidrat', 'Dahlia', 'Afyaa', 'Saba', 'Zina'];
let maleStudents = ['Albert', 'Abdu', 'Saad', 'Tariq', 'Mark'];
let students = femaleStudents.concat(maleStudents);
let index = 0;

students.sort();

console.log('\nFemale Students list:');
console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

console.log('\nMale Students list:');
while(index < maleStudents.length) {
    console.log(maleStudents[index]);
    index++;
}

console.log('\nAll Students list:');
for(student in students) {
    console.log(students[student]);
}