// Select the first list item element and add the orange class
// Using the selected element select the following element using nextElementSibling and add the orange class
// Keep doing this until there's no more siblings
// At the end all elements must have the orange class
// Once you acomplish this task:
// Now we need to go back using previousElementSibling
// Add red class to Item 3
// Add green class to Item 1
const element = document.querySelector('ul');
const elementChildren = element.children;
let childElement;

for (child=0; child < (elementChildren.length-1); child++){
    childElement = elementChildren[child];
    childElement.nextElementSibling.classList.add("orange");
}
// ((child+1)+Element)
console.log(elementChildren);
setTimeout(()=>{
    for (child=(elementChildren.length-1); child > 0; child--){
        childElement = elementChildren[child];
        if(child == 3){
            childElement.previousElementSibling.classList.remove("orange");
            childElement.previousElementSibling.classList.add("red");
        } else if(child == 1){
            childElement.previousElementSibling.classList.remove("orange");
            childElement.previousElementSibling.classList.add("green");
        }
    }},4000);
console.log(elementChildren);
