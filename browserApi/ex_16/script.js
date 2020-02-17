// Select the first link element
// Show the href and class attributes values
// Use any of the ways that you know


window.onload = function() {
const element = document.querySelector('a');

let href = element.getAttribute('href');
let className = element.getAttribute('class');

console.log(element);
console.log(href);
console.log(className);

href = element.attributes[0].name;
let hrefValue = element.attributes[0].value;
console.log(href);
console.log(hrefValue);
}