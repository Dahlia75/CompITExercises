// Select the ul element
// Show the ul children elements as output
// Select the 2nd child element, assign it to a variable and assign the green class to it
// Select the 4th child element, assign it to a variable and assign the red class to it
// Use the selected child elements to show the parent one as output
// Using one of the child elements get a reference to the parent and add the orange class to it
const element = document.querySelector('ul');
console.log('eleement children is ', element.children);
const secondChild = element.children.item(1);
console.log(secondChild)
secondChild.classList.add('green');
const thirdChild = element.children.item(3);
thirdChild.classList.add('red');
secondChild.parentElement.classList.add('orange');
