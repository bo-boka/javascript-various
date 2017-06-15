
//creating an object
//use a function constructor. Can't return anything because 'new' keyword is used
  //when it's invoked and that returns the new obj with the functions props
  //best convention is to capitalize func constructors
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
}
//put methods on prototype instead of inside function constructor so that it's
  //not created every time an obj is created which would be really expensive
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe'); //'new' operator returns obj
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
