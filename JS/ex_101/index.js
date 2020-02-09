// Define a function named showUser that will output the following data:
// Your name
// Your age
// Your phone number
// Your street
// Your postal code
// If you're married or not (boolean)

function showUser() {
    let name = 'Dahlia'
    let age = '44';
    let phoneNumber = '604 111 2222';
    let street = 'Laurel st.';
    let postalCode = 'V1V 2V6';
    let maritalStatus = false;

    console.log('Your name: %s\nYour age: %s\nYour phone number: %s\nYour street: %s\nYour postal code: %s\nMarital Status: %s', name, age, phoneNumber, street, postalCode, maritalStatus);
}

showUser();