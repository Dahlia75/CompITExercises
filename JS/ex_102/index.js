// Define a showName variable and assign a function as value
// When the showName function get executed it will print your name with the following output format:
// ===========
// = Nicolás =
// ===========
// Call the showName at least 2 times

let showName = function() {
    let name = 'Dahlia';
    let line = ''
    for(let row=1; row<4; row++){
        if (row != 2) {
            for(let i=0; i<(name.length + 4); i++) {
                line += '=';
            }
        } else {
            line = '= ' + name + ' =';
        }
        console.log(line);
        line = ''
    }
}

showName();
showName();