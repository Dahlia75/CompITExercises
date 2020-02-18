// Select the first link element
// Add the blue class if the element has the class attribute
// If not, then add the red class
window.onload = function() {
    const element = document.querySelector('a');
    if (element.hasAttribute('class')) {
        element.classList.add('azul');
    } else {
        element.classList.add('rojo');
    }
}