var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = []; //have to use 2nd example for arrays
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person); //returns boolean

console.log(typeof undefined); // makes sense
//typeof null returns object
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);
