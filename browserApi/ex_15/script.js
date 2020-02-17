// Select the element with the important id using getElementById selector
// Select all elements that are inside a list item element using querySelectorAll
// Select the ul element using querySelector
// Select the element with the blue class use the proper selector
// Show all selected elements using console.log as output
window.onload = function() {
    const importantId = document.getElementById('important');
    const listElement = document.querySelectorAll('li');
    const ulElement = document.querySelector('ul');
    const blueElement = document.querySelectorAll('.blue');
    console.log(importantId);
    console.log(listElement);
    console.log(ulElement);
    console.log(blueElement);
}