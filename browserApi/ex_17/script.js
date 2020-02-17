// Ask the user to select a color showing the following message:
// Please choose & input one of the following colors: green, blue or red
// Select the first link element
// Add the user selected color as class name to the selected element (first link)
// Avoid adding the class if the user inputs a color that's not an option
// So if the user selects blue as color we need to add the blue class to the first link
window.onload = function(){
    const className = prompt('Please choose & input one of the following colors: green, blue or red');
    const element = document.querySelector('a');
    if (className == 'green' || className == 'blue' || className == 'red') {
        element.classList.add(className);
    }
}
