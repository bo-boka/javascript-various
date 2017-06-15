
// namespace collision
var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

//to solve, wrap in object
var spanish = {};

spanish.greet = 'Hola!';

//can create namespace w/in namespace
var english = {
    greetings: {
        greet: 'Hello!'
    }
};

console.log(english);

//can also wrap all code in IIFE as is done in creating frameworks
(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}('john'));
