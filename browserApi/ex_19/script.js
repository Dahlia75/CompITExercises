// Select the h1 and div element and assign them to a new variable
// If any of these elements has attributes then add the striked class to both of them
// Else add the bold class
// Remove the name attribute from the div element (use the web console elements tab to see the result)
window.onload = function() {
    const div = document.querySelector('div');
    const h1 = document.querySelector('h1');
    if (div.hasAttributes() || h1.hasAttributes()) {
        div.setAttribute('class','striked');
        h1.setAttribute('class','striked');
    } else {
        div.setAttribute('class','bold');
        h1.setAttribute('class','bold');
    }
    div.removeAttribute('name');
    console.log(div.hasAttribute('name'));
}