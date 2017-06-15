//regular function (function statement)
function greet(name){
	console.log("Hello " + name);
}

greet("Sarah");
greet(); //if no param, value is undefined

//can invoke func before declaration in js but not good practice
//hoisting (execution context runs through first putting  in memory
//				all functions and var names[not their values; values = undefined])
greetHandlingDefault();

//set default value for function calls with no param
function greetHandlingDefault(name){
	name = name || '<Your name here.>';
	console.log("Hola " + name);
}

//anonymous function (function expression)
//can't hoist with anonymous funcs
var greetAnonymous = function(name){
	console.log("Hi " +name)
};

greetAnonymous("Sarah");

//IIFE-- immediately invoked function expression
var greetIIFE = function(name) {
    return 'Hello ' + name;
}('John');

console.log(greetIIFE);

// Also an IIFE
//wraps anonymous function in parens to make it an expression
//used by wrapping all code in frameworks to avoid namespace collision
(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}('john')); //can also put ('john') after expression ...})('john');

//if we did want to access the global obj while keeping namespaces
var greeting = 'Hola'; //in global object
(function(global, name) {
    var greeting = 'Hello'; // in this execution context
		global.greeting = 'Hello'; //mutates from 'Hola' to 'Hello's
    console.log(greeting + ' ' + name);
}(window, 'john'));

//CALL APPLY BIND to manipulate 'this' variable
//every function comes with call() apply() and bind() methods
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() { //'this' keyword applies to obj if in obj meth
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());//'this' keyword applies to global
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
}//.bind(person);  //to bind on the fly and call logName directly

var logPersonName = logName.bind(person); //binds 'this' to person obj scope
logPersonName('en', 'fr');				//by creating copy of logName func putting it into
														//logPersonName and binding is to person obj.
logName.call(person, 'en', 'es'); //calls func and binds all at once
logName.apply(person, ['en', 'es']); //same as above except args are in array

//w iife example
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
}).apply(person, ['es', 'en']);

// function borrowing
//used with call() or apply() to use methods of other objects
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}
//grabs person obj's getFullName method to use w person2 obj
console.log(person.getFullName.apply(person2));

// function currying
//used with bind() to add/preset function params
function multiply(a, b) {
    return a*b;
}
//any params given become permanent in the copy function
//i.e. a = 2 and if there was a second param, it would set b
var multipleByTwo = multiply.bind(this, 2); //presets 1st param: a = 2
console.log(multipleByTwo(4)); //4 is applied to 2nd param: b = 4

var multipleByThree = multiply.bind(this, 3, 4); //presetting both params
console.log(multipleByThree());
